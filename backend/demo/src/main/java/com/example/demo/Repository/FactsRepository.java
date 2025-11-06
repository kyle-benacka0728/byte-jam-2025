package com.example.demo.Repository;

import com.example.demo.Data.Facts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FactsRepository extends JpaRepository<Facts, Integer> {
    List<Facts> findByCultureId(int culture_id);
}
