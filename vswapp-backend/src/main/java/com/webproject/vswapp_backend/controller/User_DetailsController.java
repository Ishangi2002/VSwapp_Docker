package com.webproject.vswapp_backend.controller;

import com.webproject.vswapp_backend.dto.User_DetailsDto;
import com.webproject.vswapp_backend.service.User_DetailsService;
import com.webproject.vswapp_backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("api/user-details")
@CrossOrigin(origins = "http://localhost:5173")
public class User_DetailsController {

    private User_DetailsService userDetailsService;
    private final UserService userService;

    // Create new User_Details

    @PostMapping
    public ResponseEntity<User_DetailsDto> createUserDetails(@RequestBody User_DetailsDto userDetailsDto) {
        User_DetailsDto savedDetails = userDetailsService.createUser_Details(userDetailsDto);
        return new ResponseEntity<>(savedDetails, HttpStatus.CREATED);
    }

    // Get User_Details by User ID
    @GetMapping("/by-user/{userId}")
    public ResponseEntity<User_DetailsDto> getUserDetailsByUserId(@PathVariable("userId") Long userId) {
        User_DetailsDto detailsDto = userDetailsService.getUserDetailsByUserId(userId);
        return ResponseEntity.ok(detailsDto);
    }


    // Get all User_Details
    @GetMapping
    public ResponseEntity<List<User_DetailsDto>> getAllUserDetails() {
        List<User_DetailsDto> allDetails = userDetailsService.getAllUserDetails();
        return ResponseEntity.ok(allDetails);
    }

    // Update User_Details by ID
    @PutMapping("/by-user/{userId}")
    public ResponseEntity<User_DetailsDto> updateUserDetailsByUserId(
            @PathVariable("userId") Long userId,
            @RequestBody User_DetailsDto updatedDetails) {

        // Call service method to update using userId
        User_DetailsDto updated = userDetailsService.updateUserDetailsByUserId(userId, updatedDetails);
        return ResponseEntity.ok(updated);
    }

    // Delete User_Details by ID
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long id) {
        // Delete user details first
        userDetailsService.deleteUserDetailsByUserId(id);
        // Then delete user
        userService.deleteUser(id);
        return ResponseEntity.ok("User and their details deleted successfully");
    }

}
