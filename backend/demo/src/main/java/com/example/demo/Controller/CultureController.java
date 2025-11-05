package com.example.demo.Controller;

import com.example.demo.Data.Cultures;
import com.example.demo.Service.CulturesImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class CultureController {
    @Autowired
    private CulturesImp culturesImp;

    @PostMapping("/cultures")
    public Cultures cultures(@RequestBody Cultures c) {
        return culturesImp.addCulture(c);
    }
}
