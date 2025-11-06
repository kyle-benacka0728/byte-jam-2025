package com.example.demo.Repository;

import com.example.demo.Data.Cultures;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CulturesRepository extends JpaRepository<Cultures, Integer> {
    Cultures findByCultureId(int culture_id);
}
