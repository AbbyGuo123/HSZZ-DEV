package com.hszz.hszzbackend.model;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by guowanyi on 2020/10/26.
 */
@Entity
@Table(name = "HSZZ_ORDER")
public class HSZZOrder {
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private Long id;
    @Column(length = 32)
    private String sourceOfTourists;
    @Column(length = 32)
    private String customer;
    private String product;
//    private List<Product> productList;
    private Date orderDate;
    private int count;
    @Column(length = 32)
    private String remarks;
    @Column(length = 32)
    private String updateBy;
//    //默认创建时间
//    @Temporal(TemporalType.TIMESTAMP)
//    @CreationTimestamp
//    private LocalTime createIodt;
//    //默认更新时间
//    @UpdateTimestamp
//    @Temporal(TemporalType.TIMESTAMP)
//    private LocalTime updateIodt;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
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

//    public LocalTime getCreateIodt() {
//        return createIodt;
//    }
//
//    public void setCreateIodt(LocalTime createIodt) {
//        this.createIodt = createIodt;
//    }
//
//    public LocalTime getUpdateIodt() {
//        return updateIodt;
//    }
//
//    public void setUpdateIodt(LocalTime updateIodt) {
//        this.updateIodt = updateIodt;
//    }
}
