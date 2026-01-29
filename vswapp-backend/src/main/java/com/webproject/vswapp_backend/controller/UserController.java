package com.webproject.vswapp_backend.controller;

import com.webproject.vswapp_backend.dto.UserDto;
import com.webproject.vswapp_backend.entity.User;
import com.webproject.vswapp_backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("api/user")
@CrossOrigin(origins = "http://43.205.199.30:5173")

public class UserController {
    private UserService userService;

    //Build Add user REST API
    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto){
        UserDto savedUser= userService.createUser(userDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    //Build Get user REST API
    @GetMapping("{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("id") Long userId){
        UserDto userDto = userService.getUserById(userId);
        return ResponseEntity.ok(userDto);
    }

    //Build getAll users REST API
    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUser(){
        List<UserDto> users =userService.getAllUser();
        return ResponseEntity.ok(users);
    }

    //Build update users REST API
    @PutMapping("{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable("id") Long userId,
                                              @RequestBody UserDto updatedUser){
        UserDto userDto = userService.updateUser(userId,updatedUser);
        return ResponseEntity.ok(userDto);
    }

    //Build delete user REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteSkill(@PathVariable("id") Long userId){
        userService.deleteUser(userId);
        return ResponseEntity.ok("User deleted successfully.");
    }
}
