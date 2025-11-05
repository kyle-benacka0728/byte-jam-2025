package com.example.demo.Repository;

import com.example.demo.Data.Cultures;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CulturesRepository extends CrudRepository<Cultures, Integer> {

}
