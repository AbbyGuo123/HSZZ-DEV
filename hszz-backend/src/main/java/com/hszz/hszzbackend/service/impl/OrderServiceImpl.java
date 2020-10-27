package com.hszz.hszzbackend.service.impl;

import com.hszz.hszzbackend.Repository.OrderRepository;
import com.hszz.hszzbackend.model.HSZZOrder;
import com.hszz.hszzbackend.service.OrderService;
import com.hszz.hszzbackend.vo.OrderCriteriaVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by guowanyi on 2020/10/27.
 */
@Component
public class OrderServiceImpl implements OrderService {
    @Autowired
    OrderRepository orderRepository;

    @Override
    public List<HSZZOrder> getOrderResult(OrderCriteriaVO orderCriteriaVO) {
        return orderRepository.findAll(new Specification<HSZZOrder>() {
            @Override
            public Predicate toPredicate(Root<HSZZOrder> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> predicateList = new ArrayList<Predicate>();
                if(orderCriteriaVO.getSourceOfTourists()!=null && !orderCriteriaVO.getSourceOfTourists().isEmpty()){
                    predicateList.add(criteriaBuilder.equal(root.get("sourceOfTourists"), orderCriteriaVO.getSourceOfTourists()));
                }
                if(orderCriteriaVO.getCustomer()!=null && !orderCriteriaVO.getCustomer().isEmpty()){
                    predicateList.add(criteriaBuilder.equal(root.get("customer"), orderCriteriaVO.getCustomer()));
                }
                if(orderCriteriaVO.getStartDate()!=null && orderCriteriaVO.getEndDate()!=null){
                    predicateList.add(criteriaBuilder.between(root.get("orderDate"),
                            orderCriteriaVO.getStartDate(),
                            orderCriteriaVO.getEndDate()));
                }
                return criteriaBuilder.and(predicateList.toArray(new Predicate[predicateList.size()]));
            }
        });
    }

}


