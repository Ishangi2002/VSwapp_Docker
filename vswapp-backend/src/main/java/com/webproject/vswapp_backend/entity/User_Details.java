package com.webproject.vswapp_backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "user_details")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class User_Details {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "detailed_id")
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "profile_picture")
    private String profilePicture;

    @Column(name = "first_name")
    private String firstname;

    @Column(name = "last_name")
    private String lastname;


}
