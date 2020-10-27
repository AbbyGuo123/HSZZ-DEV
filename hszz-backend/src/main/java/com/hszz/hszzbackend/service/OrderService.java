package com.hszz.hszzbackend.service;

import com.hszz.hszzbackend.model.HSZZOrder;
import com.hszz.hszzbackend.vo.OrderCriteriaVO;

import java.util.List;

/**
 * Created by guowanyi on 2020/10/26.
 */
public interface OrderService {
    List<HSZZOrder> getOrderResult(OrderCriteriaVO orderCriteriaVO);
}
