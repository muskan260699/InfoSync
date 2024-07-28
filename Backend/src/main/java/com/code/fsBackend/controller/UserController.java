package com.code.fsBackend.controller;

import com.code.fsBackend.exception.UserNotFoundException;
import com.code.fsBackend.model.User;
import com.code.fsBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {
    @Autowired
    private UserRepository userRepository;


    @GetMapping("/users")
    public List<User> user(){
        return userRepository.findAll();
    }

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }



   @GetMapping("/user/{id}")
        User getUserbyId(@PathVariable Long id){
   return userRepository.findById(id)
           .orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("user/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User updatedUser, @PathVariable Long id){
        User existingUser= userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));

        existingUser.setMail(updatedUser.getMail());
        existingUser.setUsername(updatedUser.getUsername());
        existingUser.setName(updatedUser.getName());

           User savedUser= userRepository.save(existingUser);
//
//        Map<String, Object> response=new HashMap<>();
//
//        response.put("message", savedUser);
        return new ResponseEntity<>(savedUser,HttpStatus.OK);
    }

    @DeleteMapping("user/{id}")
    public String deleteUser(@PathVariable Long id){
//        User userToDelete=userRepository.findById(id)
//                .orElseThrow(()-> new UserNotFoundException(id));
//        userRepository.delete(userToDelete);
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
//        Map<String, String> response=new HashMap<>();

//        response.put("user deleted successfully", userToDelete);
        return "User with id: "+id+" deleted successfully";
    }


}
