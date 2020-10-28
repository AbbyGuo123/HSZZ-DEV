package com.hszz.hszzbackend.service.impl;

import com.hszz.hszzbackend.Repository.OrderRepository;
import com.hszz.hszzbackend.model.HSZZOrder;
import com.hszz.hszzbackend.service.OrderService;
import com.hszz.hszzbackend.vo.OrderCriteriaVO;
import com.hszz.hszzbackend.vo.OrderVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by guowanyi on 2020/10/27.
 */
@Component
public class OrderServiceImpl implements OrderService {
    @Autowired OrderRepository orderRepository;

    @Override
    public List<HSZZOrder> getOrderResult(OrderCriteriaVO orderCriteriaVO) {
        return orderRepository.findAll((Specification<HSZZOrder>) (root, criteriaQuery, criteriaBuilder) -> {
            List<Predicate> predicateList = new ArrayList<Predicate>();
            if(orderCriteriaVO.getSourceOfTourists()!=null && !orderCriteriaVO.getSourceOfTourists().isEmpty()){
                predicateList.add(criteriaBuilder.like(root.get("sourceOfTourists"), "%"+orderCriteriaVO.getSourceOfTourists()+"%"));
            }
            if(orderCriteriaVO.getCustomer()!=null && !orderCriteriaVO.getCustomer().isEmpty()){
                predicateList.add(criteriaBuilder.like(root.get("customer"), "%"+orderCriteriaVO.getCustomer()+"%"));
            }
            if(orderCriteriaVO.getStartDate()!=null && orderCriteriaVO.getEndDate()!=null){
                predicateList.add(criteriaBuilder.between(root.get("orderDate"),
                        orderCriteriaVO.getStartDate(),
                        orderCriteriaVO.getEndDate()));
            }
            return criteriaBuilder.and(predicateList.toArray(new Predicate[predicateList.size()]));
        });
    }

    @Override
    public HSZZOrder saveOrder(OrderVO orderVO) {
        HSZZOrder order = HszzOrderAssembler(orderVO);
        orderRepository.save(order);
        return order;
    }


    private HSZZOrder HszzOrderAssembler(OrderVO orderVO) {
        HSZZOrder order = new HSZZOrder();
        order.setSourceOfTourists(orderVO.getSourceOfTourists());
        order.setCustomer(orderVO.getCustomer());
        order.setProduct(orderVO.getProduct());
        order.setCount(orderVO.getCount());
        order.setOrderDate(new Date());
        order.setRemarks(orderVO.getRemarks());
        return order;
    }

}


