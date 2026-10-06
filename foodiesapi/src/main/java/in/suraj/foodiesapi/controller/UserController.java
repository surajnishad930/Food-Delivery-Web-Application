package in.suraj.foodiesapi.controller;

import in.suraj.foodiesapi.io.UserRequest;
import in.suraj.foodiesapi.io.UserResponse;
import in.suraj.foodiesapi.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final UserService userService;

    @PostMapping("/resister")
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse resister(@RequestBody UserRequest request){
        return userService.resisterUser(request);
    }
}

