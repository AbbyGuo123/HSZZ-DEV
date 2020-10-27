package com.hszz.hszzbackend.controller;

import com.hszz.hszzbackend.model.HSZZOrder;
import com.hszz.hszzbackend.service.OrderService;
import com.hszz.hszzbackend.vo.OrderCriteriaVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by guowanyi on 2020/10/25.
 */
@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    OrderService orderService;

    @GetMapping("/order")
    @ResponseBody
    public List<HSZZOrder> getAllOrder(OrderCriteriaVO orderCriteriaVO) {
        return orderService.getOrderResult(orderCriteriaVO);
    }
}
