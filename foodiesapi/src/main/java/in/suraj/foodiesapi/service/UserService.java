package in.suraj.foodiesapi.service;

import in.suraj.foodiesapi.io.UserRequest;
import in.suraj.foodiesapi.io.UserResponse;

public interface UserService {
    UserResponse resisterUser(UserRequest request);

    String findByUserId();
}
