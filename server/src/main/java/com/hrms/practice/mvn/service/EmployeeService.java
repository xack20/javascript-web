package com.hrms.practice.mvn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Map;

import com.hrms.practice.mvn.model.BankInfo;
import com.hrms.practice.mvn.model.Education;
import com.hrms.practice.mvn.model.EmergencyContact;
import com.hrms.practice.mvn.model.Employee;
import com.hrms.practice.mvn.model.Experience;
import com.hrms.practice.mvn.model.FamilyInfo;
import com.hrms.practice.mvn.model.Role;

import java.util.Arrays;
import java.util.HashMap;

import com.hrms.practice.mvn.model.User;
import com.hrms.practice.mvn.repository.UserRepository;
import com.hrms.practice.mvn.repository.BankInfoRepository;
import com.hrms.practice.mvn.repository.EducationRepository;
import com.hrms.practice.mvn.repository.EmergencyContactRepository;
import com.hrms.practice.mvn.repository.EmployeeRepository;
import com.hrms.practice.mvn.repository.ExperienceRepository;
import com.hrms.practice.mvn.repository.FamilyInfoRepository;
import com.hrms.practice.mvn.repository.RoleRepository;

@Service
public class EmployeeService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private BankInfoRepository bankInfoRepository;

	@Autowired
	private EducationRepository educationRepository;

	@Autowired
	private EmergencyContactRepository emergencyContactRepository;

	@Autowired
	private ExperienceRepository experienceRepository;

	@Autowired
	private FamilyInfoRepository familyInfoRepository;

	public User getUserByUsername(String username) {
		return userRepository.findUserByUsernameIgnoreCase(username);
	}

	public User saveEmployee(Map<String,Object>payload) {

		User user = new User();
		
		user.setPassword(passwordEncoder.encode((CharSequence) payload.get("password")));
		user.setFullname(payload.get("firstname")+" "+payload.get("lastname"));
		user.setUsername((String) payload.get("username"));


		Role userRole = roleRepository.findByRole((String) payload.get("role"));
		user.setRoles(Arrays.asList(userRole));


		userRepository.save(user);

		
		Employee employee = new Employee();

		employee.setDepartment((String)payload.get("department"));
		employee.setDesignation((String)payload.get("designation"));
		employee.setEmail((String)payload.get("email"));
		employee.setEmployee_id((String)payload.get("employee_id"));
		employee.setFirstname((String)payload.get("firstname"));
		employee.setLastname((String)payload.get("lastname"));
		employee.setPhoneNumber((String)payload.get("phone_no"));
		employee.setUser_id(user.getId());
	
		employeeRepository.save(employee);

		

		return user;
	}


	public Map<String,Object> updateEmployee(Map<String,Object> payload, long id){
		Employee employee = employeeRepository.findByUserId(id);


		if(employee==null)return null;

		if(payload.get("department")!=null) employee.setDepartment((String)payload.get("department"));
		if(payload.get("designation")!=null)employee.setDesignation((String)payload.get("designation"));
		if(payload.get("email")!=null)employee.setEmail((String)payload.get("email"));
		if(payload.get("employee_id")!=null)employee.setEmployee_id((String)payload.get("employee_id"));
		if(payload.get("firstname")!=null)employee.setFirstname((String)payload.get("firstname"));
		if(payload.get("lastname")!=null)employee.setLastname((String)payload.get("lastname"));
		if(payload.get("phone_no")!=null)employee.setPhoneNumber((String)payload.get("phone_no"));
		if(payload.get("deleted")!=null)employee.setDeleted((Boolean)payload.get("deleted"));
		if(payload.get("address")!=null)employee.setAddress((String)payload.get("address"));
		if(payload.get("birthday")!=null)employee.setBirthday((String)payload.get("birthday"));
		if(payload.get("gender")!=null)employee.setGender((String)payload.get("gender"));
		if(payload.get("maritial_status")!=null)employee.setMaritial_status((String)payload.get("maritial_status"));
		if(payload.get("passport_no")!=null)employee.setPassport_no((String)payload.get("passport_no"));
		if(payload.get("religion")!=null)employee.setReligion((String)payload.get("religion"));
		if(payload.get("nationality")!=null)employee.setNationality((String)payload.get("nationality"));
		if(payload.get("spouse")!=null)employee.setSpouse((String)payload.get("spouse"));
		if(payload.get("telephone")!=null)employee.setTelephone((String)payload.get("telephone"));
		if(payload.get("report_to")!=null)employee.setReport_to((String)payload.get("report_to"));
		
		employeeRepository.save(employee);




		BankInfo bankInfo = new BankInfo();

		if(payload.get("account_no")!=null)bankInfo.setAccount_no((String)payload.get("account_no"));
		if(payload.get("bank_name")!=null)bankInfo.setBank_name((String)payload.get("bank_name"));
		if(payload.get("ifsc_code")!=null)bankInfo.setIfsc_code((String)payload.get("ifsc_code"));

		bankInfoRepository.save(bankInfo);


		Education education = new Education();

		if(payload.get("ssc")!=null)education.setSsc((String)payload.get("ssc"));
		if(payload.get("hsc")!=null)education.setHsc((String)payload.get("hsc"));
		if(payload.get("bsc")!=null)education.setBsc((String)payload.get("bsc"));
		if(payload.get("msc")!=null)education.setMsc((String)payload.get("msc"));

		educationRepository.save(education);

		EmergencyContact emergencyContact = new EmergencyContact();

		if(payload.get("emergency_name")!=null)emergencyContact.setName((String)payload.get("emergency_name"));
		if(payload.get("emergency_phone")!=null)emergencyContact.setPhone((String)payload.get("emergency_phone"));
		if(payload.get("emergency_relashionship")!=null)emergencyContact.setRelashionship((String)payload.get("emergency_relashionship"));

		emergencyContactRepository.save(emergencyContact);

		Experience experience = new Experience();

		if(payload.get("company_name")!=null)experience.setCompany_name((String)payload.get("company_name"));
		if(payload.get("designation")!=null)experience.setDesignation((String)payload.get("designation"));
		if(payload.get("from_date")!=null)experience.setFrom_date((String)payload.get("from_date"));
		if(payload.get("to_date")!=null)experience.setTo_date((String)payload.get("to_date"));

		experienceRepository.save(experience);

		FamilyInfo familyInfo = new FamilyInfo();

		if(payload.get("birthday")!=null)familyInfo.setBirthday((String)payload.get("birthday"));
		if(payload.get("name")!=null)familyInfo.setName((String)payload.get("name"));
		if(payload.get("phone")!=null)familyInfo.setPhone((String)payload.get("phone"));
		if(payload.get("relashionship")!=null)familyInfo.setRelashionship((String)payload.get("relashionship"));

		familyInfoRepository.save(familyInfo);


		Map<String,Object> employeeFullDetails = new HashMap<String,Object>();

		employeeFullDetails.put("employee",employee);
		employeeFullDetails.put("bankInfo",bankInfo);
		employeeFullDetails.put("education",education);
		employeeFullDetails.put("emergencyContact",emergencyContact);
		employeeFullDetails.put("experience",experience);
		employeeFullDetails.put("familyInfo",familyInfo);


		return employeeFullDetails;
	}

	public User getUserByUserId(long id) {
		return userRepository.findByUserId(id);
	}
}
