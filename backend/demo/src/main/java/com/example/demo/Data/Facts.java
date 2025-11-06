package com.example.demo.Data;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="Facts")
@Data
public class Facts {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="facts_id")
    private int factsId;

    @Column(name="bullet1")
    private String bullet1;

    @Column(name="bullet2")
    private String bullet2;

    @Column(name="bullet3")
    private String bullet3;

    @Column(name="bullet4")
    private String bullet4;

    @Column(name = "culture_id", nullable = false)
    private int cultureId;
}
