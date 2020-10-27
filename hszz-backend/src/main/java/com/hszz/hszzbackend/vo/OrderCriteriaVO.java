package com.hszz.hszzbackend.vo;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

/**
 * Created by guowanyi on 2020/10/27.
 */
public class OrderCriteriaVO {
    private String sourceOfTourists;
    private String customer;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date startDate;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date endDate;

    public String getSourceOfTourists() {
        return sourceOfTourists;
    }

    public void setSourceOfTourists(String sourceOfTourists) {
        this.sourceOfTourists = sourceOfTourists;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
