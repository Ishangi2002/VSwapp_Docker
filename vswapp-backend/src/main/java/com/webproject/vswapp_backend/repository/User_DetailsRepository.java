package com.webproject.vswapp_backend.repository;

import com.webproject.vswapp_backend.entity.User_Details;
import org.springframework.data.jpa.repository.JpaRepository;
import com.webproject.vswapp_backend.entity.User;
import java.util.Optional;


public interface User_DetailsRepository extends JpaRepository<User_Details,Long> {
    User_Details findByUser(User user);
    Optional<User_Details> findByUserId(Long userId);


}
