package in.suraj.foodiesapi.service;

import in.suraj.foodiesapi.entity.UserEntity;
import in.suraj.foodiesapi.io.UserRequest;
import in.suraj.foodiesapi.io.UserResponse;
import in.suraj.foodiesapi.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationFacade authenticationFacade;

    @Override
    public UserResponse resisterUser(UserRequest request){
        UserEntity newUser =convertToEntity(request);
        newUser = userRepository.save(newUser);
        return convertToResponse(newUser);

    }

    @Override
    public String findByUserId() {
        String loggedInUserEmail =authenticationFacade.getAuthentication().getName();
        UserEntity loggedInUser= userRepository.findByEmail(loggedInUserEmail).orElseThrow(()->new UsernameNotFoundException("User not found"));
        return loggedInUser.getId();
    }


    private UserEntity convertToEntity(UserRequest request){
        return UserEntity.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .name(request.getName())
                .build();
    }
    private UserResponse convertToResponse(UserEntity resisterUser){
        return UserResponse.builder()
                .id(resisterUser.getId())
                .name(resisterUser.getName())
                .email(resisterUser.getEmail())
                .build();
    }
}
