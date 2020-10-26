package com.hszz.hszzbackend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by guowanyi on 2020/10/25.
 */
@Controller
@RequestMapping("/order")
public class OrderController {
    @RequestMapping("/list")
    @ResponseBody
    public String testDemo() {
        return "Hello World!";
    }
}
