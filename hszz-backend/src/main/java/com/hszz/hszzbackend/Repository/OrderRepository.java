package com.hszz.hszzbackend.Repository;

import com.hszz.hszzbackend.model.HSZZOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Date;
import java.util.List;

/**
 * Created by guowanyi on 2020/10/26.
 */
public interface OrderRepository extends JpaRepository<HSZZOrder,Long>, JpaSpecificationExecutor<HSZZOrder> {
    List<HSZZOrder> findByOrderDateBetween(Date startDate, Date endDate);

    List<HSZZOrder> findBySourceOfTourists(String sourceOfTourists);

    List<HSZZOrder> findBySourceOfTouristsAndOrderDateBetween(String sourceOfTourists, Date startDate, Date endDate);

    List<HSZZOrder> findByCustomerLike(String customer);

    List<HSZZOrder> findBySourceOfTouristsAndCustomerLikeAndOrderDateBetween(String sourceOfTourists, String customer, Date startDate, Date endDate);


}
