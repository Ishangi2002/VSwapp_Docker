package com.webproject.vswapp_backend.controller;

import com.webproject.vswapp_backend.dto.FeedbackDto;
import com.webproject.vswapp_backend.service.FeedbackService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("api/feedback")
@CrossOrigin(origins = "http://localhost:5173")
public class FeedbackController {

    private final FeedbackService feedbackService;

    @PostMapping
    public ResponseEntity<FeedbackDto> createFeedback(@RequestBody FeedbackDto feedbackDto) {
        System.out.println("Received comment: " + feedbackDto.getComment());
        FeedbackDto savedFeedback = feedbackService.createFeedback(feedbackDto);
        return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
    }


    @GetMapping("{id}")
    public ResponseEntity<FeedbackDto> getFeedbackById(@PathVariable("id") Long feedbackId) {
        FeedbackDto feedbackDto = feedbackService.getFeedbackById(feedbackId);
        return ResponseEntity.ok(feedbackDto);
    }

    @GetMapping
    public ResponseEntity<List<FeedbackDto>> getAllFeedback() {
        List<FeedbackDto> feedbackList = feedbackService.getAllFeedback();
        return ResponseEntity.ok(feedbackList);
    }

    @PutMapping("{id}")
    public ResponseEntity<FeedbackDto> updateFeedback(@PathVariable("id") Long feedbackId,
                                                      @RequestBody FeedbackDto updatedFeedback) {
        FeedbackDto feedbackDto = feedbackService.updateFeedback(feedbackId, updatedFeedback);
        return ResponseEntity.ok(feedbackDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteFeedback(@PathVariable("id") Long feedbackId) {
        feedbackService.deleteFeedback(feedbackId);
        return ResponseEntity.ok("Feedback deleted successfully.");
    }
}
