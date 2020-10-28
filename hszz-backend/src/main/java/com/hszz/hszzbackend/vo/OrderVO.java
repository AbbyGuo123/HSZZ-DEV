package com.hszz.hszzbackend.vo;

/**
 * Created by guowanyi on 2020/10/28.
 */
public class OrderVO {
    private String sourceOfTourists;
    private String customer;
    private String product;
    private String orderDate;
    private int count;
    private String remarks;
    private String updateBy;

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

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getUpdateBy() {
        return updateBy;
    }

    public void setUpdateBy(String updateBy) {
        this.updateBy = updateBy;
    }
}
