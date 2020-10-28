package com.hszz.hszzbackend.controller;

import com.hszz.hszzbackend.model.HSZZOrder;
import com.hszz.hszzbackend.service.OrderService;
import com.hszz.hszzbackend.vo.OrderCriteriaVO;
import com.hszz.hszzbackend.vo.OrderVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by guowanyi on 2020/10/25.
 */
@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    OrderService orderService;

    @GetMapping
    @ResponseBody
    public List<HSZZOrder> getAllOrder(OrderCriteriaVO orderCriteriaVO) {
        return orderService.getOrderResult(orderCriteriaVO);
    }

    @PostMapping
    @ResponseBody
    public HSZZOrder addOrder(OrderVO orderVO){
        return orderService.saveOrder(orderVO);
    }

}
