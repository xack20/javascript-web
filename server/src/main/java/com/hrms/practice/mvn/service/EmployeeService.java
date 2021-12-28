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

@SuppressWarnings("unchecked")
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

	public Map<String,Object> saveEmployee(Map<String,Object>payload) {

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

		BankInfo bankInfo = new BankInfo();
		Education education = new Education();
		EmergencyContact emergencyContact = new EmergencyContact();
		Experience experience = new Experience();
		FamilyInfo familyInfo = new FamilyInfo();

		
		bankInfo.setUser_id(user.getId());
		education.setUser_id(user.getId());
		emergencyContact.setUser_id(user.getId());
		experience.setUser_id(user.getId());
		familyInfo.setUser_id(user.getId());
		
		
		
		bankInfoRepository.save(bankInfo);
		educationRepository.save(education);
		emergencyContactRepository.save(emergencyContact);
		experienceRepository.save(experience);
		familyInfoRepository.save(familyInfo);

		Map<String,Object> response = new HashMap<>();
		response.put("employee", employee);
		response.put("bankInfo", bankInfo);
		response.put("education", education);
		response.put("emergencyContact", emergencyContact);
		response.put("experience", experience);
		response.put("familyInfo", familyInfo);

		return response;
	}


	public Map<String,Object> updateEmployee(Map<String,Object> payload, long id){



		Employee employee = employeeRepository.findByUserId(id);


		if(employee==null)return null;

		Map<String,Object> employeePayload = (Map<String, Object>) payload.get("employee");

		if(employeePayload.get("department")!=null) employee.setDepartment((String)employeePayload.get("department"));
		if(employeePayload.get("designation")!=null)employee.setDesignation((String)employeePayload.get("designation"));
		if(employeePayload.get("email")!=null)employee.setEmail((String)employeePayload.get("email"));
		if(employeePayload.get("employee_id")!=null)employee.setEmployee_id((String)employeePayload.get("employee_id"));
		if(employeePayload.get("firstname")!=null)employee.setFirstname((String)employeePayload.get("firstname"));
		if(employeePayload.get("lastname")!=null)employee.setLastname((String)employeePayload.get("lastname"));
		if(employeePayload.get("phone_no")!=null)employee.setPhoneNumber((String)employeePayload.get("phone_no"));
		if(employeePayload.get("deleted")!=null)employee.setDeleted((Boolean)employeePayload.get("deleted"));
		if(employeePayload.get("address")!=null)employee.setAddress((String)employeePayload.get("address"));
		if(employeePayload.get("birthday")!=null)employee.setBirthday((String)employeePayload.get("birthday"));
		if(employeePayload.get("gender")!=null)employee.setGender((String)employeePayload.get("gender"));
		if(employeePayload.get("maritial_status")!=null)employee.setMaritial_status((String)employeePayload.get("maritial_status"));
		if(employeePayload.get("passport_no")!=null)employee.setPassport_no((String)employeePayload.get("passport_no"));
		if(employeePayload.get("religion")!=null)employee.setReligion((String)employeePayload.get("religion"));
		if(employeePayload.get("nationality")!=null)employee.setNationality((String)employeePayload.get("nationality"));
		if(employeePayload.get("spouse")!=null)employee.setSpouse((String)employeePayload.get("spouse"));
		if(employeePayload.get("telephone")!=null)employee.setTelephone((String)employeePayload.get("telephone"));
		if(employeePayload.get("report_to")!=null)employee.setReport_to((String)employeePayload.get("report_to"));
		
		employeeRepository.save(employee);









		Map<String,Object> bankInfoPayload = (Map<String, Object>) payload.get("bankInfo");

		BankInfo bankInfo = bankInfoRepository.findByUserId(id);

		if(bankInfoPayload.get("account_no")!=null)bankInfo.setAccount_no((String)bankInfoPayload.get("account_no"));
		if(bankInfoPayload.get("bank_name")!=null)bankInfo.setBank_name((String)bankInfoPayload.get("bank_name"));
		if(bankInfoPayload.get("ifsc_code")!=null)bankInfo.setIfsc_code((String)bankInfoPayload.get("ifsc_code"));

		bankInfoRepository.save(bankInfo);







		Map<String,Object> educationPayload = (Map<String, Object>) payload.get("education");

		Education education = educationRepository.findByUserId(id);

		if(educationPayload.get("ssc")!=null)education.setSsc((String)educationPayload.get("ssc"));
		if(educationPayload.get("hsc")!=null)education.setHsc((String)educationPayload.get("hsc"));
		if(educationPayload.get("bsc")!=null)education.setBsc((String)educationPayload.get("bsc"));
		if(educationPayload.get("msc")!=null)education.setMsc((String)educationPayload.get("msc"));

		educationRepository.save(education);






		Map<String,Object> emergencyContactPayload = (Map<String, Object>) payload.get("emergencyContact");

		EmergencyContact emergencyContact = emergencyContactRepository.findByUserId(id);

		if(emergencyContactPayload.get("emergency_name")!=null)emergencyContact.setName((String)emergencyContactPayload.get("emergency_name"));
		if(emergencyContactPayload.get("emergency_phone")!=null)emergencyContact.setPhone((String)emergencyContactPayload.get("emergency_phone"));
		if(emergencyContactPayload.get("emergency_relashionship")!=null)emergencyContact.setRelashionship((String)emergencyContactPayload.get("emergency_relashionship"));

		emergencyContactRepository.save(emergencyContact);






		Map<String,Object> experiencePayload = (Map<String, Object>) payload.get("experience");

		Experience experience = experienceRepository.findByUserId(id);

		if(experiencePayload.get("company_name")!=null)experience.setCompany_name((String)experiencePayload.get("company_name"));
		if(experiencePayload.get("designation")!=null)experience.setDesignation((String)experiencePayload.get("designation"));
		if(experiencePayload.get("from_date")!=null)experience.setFrom_date((String)experiencePayload.get("from_date"));
		if(experiencePayload.get("to_date")!=null)experience.setTo_date((String)experiencePayload.get("to_date"));

		experienceRepository.save(experience);









		Map<String,Object> familyInfoPayload = (Map<String, Object>) payload.get("familyInfo");

		FamilyInfo familyInfo = familyInfoRepository.findByUserId(id);

		if(familyInfoPayload.get("birthday")!=null)familyInfo.setBirthday((String)familyInfoPayload.get("birthday"));
		if(familyInfoPayload.get("name")!=null)familyInfo.setName((String)familyInfoPayload.get("name"));
		if(familyInfoPayload.get("phone")!=null)familyInfo.setPhone((String)familyInfoPayload.get("phone"));
		if(familyInfoPayload.get("relashionship")!=null)familyInfo.setRelashionship((String)familyInfoPayload.get("relashionship"));

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

    public Map<String, Object> getOneEmployee(long id) {

		Map<String,Object> employeeFullDetails = new HashMap<String,Object>();

		Employee employee = employeeRepository.findByUserId(id);
		BankInfo bankInfo = bankInfoRepository.findByUserId(id);
		Education education = educationRepository.findByUserId(id);
		EmergencyContact emergencyContact = emergencyContactRepository.findByUserId(id);
		Experience experience = experienceRepository.findByUserId(id);
		FamilyInfo familyInfo = familyInfoRepository.findByUserId(id);

		employeeFullDetails.put("employee",employee);
		employeeFullDetails.put("bankInfo",bankInfo);
		employeeFullDetails.put("education",education);
		employeeFullDetails.put("emergencyContact",emergencyContact);
		employeeFullDetails.put("experience",experience);
		employeeFullDetails.put("familyInfo",familyInfo);
		

		return employeeFullDetails;
		
    }
}
