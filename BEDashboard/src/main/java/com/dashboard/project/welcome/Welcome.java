package com.dashboard.project.welcome;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // This annotation is used to create RESTful web services using Spring MVC
@RequestMapping("/welcome") // This annotation is used to map web requests onto specific handler classes and/or handler methods
public class Welcome {

    @GetMapping()
    public String welcome() {
        return "Welcome to the Dashboard Project!";
    }
}
