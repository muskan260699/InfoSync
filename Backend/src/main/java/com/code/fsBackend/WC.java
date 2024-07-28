package com.code.fsBackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class WC {
    @GetMapping("/welcome")
public String wel(){
    return "WElcome Muskan";
}

}
