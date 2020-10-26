package com.hszz.hszzbackend.controller;

import com.hszz.hszzbackend.Repository.OrderRepository;
import com.hszz.hszzbackend.model.HSZZOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by guowanyi on 2020/10/25.
 */
@Controller
@RequestMapping("/order")
public class OrderController {
    @Autowired
    OrderRepository orderRepository;

    @RequestMapping("/list")
    @ResponseBody
    public List<HSZZOrder> getAllOrder() {

        return orderRepository.findAll();
    }
}
