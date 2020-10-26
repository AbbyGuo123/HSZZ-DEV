package com.hszz.hszzbackend.service;

import com.hszz.hszzbackend.model.HSZZOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by guowanyi on 2020/10/26.
 */
@Repository
public interface OrderService extends JpaRepository<HSZZOrder,Long>{
}
