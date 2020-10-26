package com.hszz.hszzbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hszz.hszzbackend.model.*;

/**
 * Created by guowanyi on 2020/10/26.
 */
public interface OrderRepository extends JpaRepository<HSZZOrder,Long>{
}
