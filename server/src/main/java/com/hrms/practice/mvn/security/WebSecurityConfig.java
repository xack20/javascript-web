package com.hrms.practice.mvn.security;

import com.hrms.practice.mvn.security.jwt.JwtRequestFilter;
import com.hrms.practice.mvn.service.MyUserDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private MyUserDetailsService employeeDetailsService;
	@Autowired
	private JwtRequestFilter jwtRequestFilter;

	
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
    CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
        return source;
    }
	
	@Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth
			.userDetailsService(employeeDetailsService)
            .passwordEncoder(passwordEncoder());
    }
	
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}


	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.cors().and()
			.csrf().disable() // disabling csrf here, you should enable it before using in production
			.authorizeRequests()
			.antMatchers("/auth/**","/job/", "/job/{id}","/candidate/new").permitAll()
			.antMatchers("/auth/**","/employee/add","/employee/add-role").permitAll()
			// .antMatchers("/employee/add","/employee/add-role","/employee/delete/{id}",
			// 	"/client/add","/client/update/{id}", "/client/delete/{id}" , "/client/{id}",
			// 	"/invoice/add","/invoice/update/{id}", "/invoice/delete/{id}", "/invoice/{id}", "/invoice/",
			// 	"/leave/all","leave/change-status/{id}",
			// 	"/job/new", "/job/delete/{id}","/job/update/{id}",
			// 	"/candidate/","/candidate/delete/{id}","/candidate/update/{id}"
			// 	).hasAuthority("ADMIN")
			.antMatchers("/employee/{id}","/employee/","employee/update/{id}",
			"/client/",
			"/leave/apply","/leave/","/leave/delete/{id}","/leave/update/{id}").hasAnyAuthority("ADMIN","EMPLOYEE")
			.anyRequest().authenticated()
			.and().sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
			
			
			http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
			http.exceptionHandling().authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED));
			http.headers().frameOptions().disable();
			
	}

}