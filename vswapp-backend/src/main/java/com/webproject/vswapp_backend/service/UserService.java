package com.webproject.vswapp_backend.service;

import com.webproject.vswapp_backend.dto.UserDto;
import com.webproject.vswapp_backend.entity.User;

import java.util.List;

public interface UserService {
    UserDto createUser(UserDto userDto);
    UserDto getUserById(Long userId);
    List<UserDto> getAllUser();
    UserDto updateUser(Long userId,UserDto updatedUser);
    void deleteUser(Long userId);
    UserDto findByEmail(String email);
    User getUserEntityById(Long userId);


}
