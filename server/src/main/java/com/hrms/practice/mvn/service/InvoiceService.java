package com.hrms.practice.mvn.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

// import com.hrms.practice.mvn.model.Client;
import com.hrms.practice.mvn.model.InvoiceItems;
import com.hrms.practice.mvn.model.Invoices;
import com.hrms.practice.mvn.payload.Response;
// import com.hrms.practice.mvn.repository.ClientRepository;
import com.hrms.practice.mvn.repository.InvoiceItemRepository;
import com.hrms.practice.mvn.repository.InvoiceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@SuppressWarnings("unchecked")
@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired 
    private InvoiceItemRepository invoiceItemRepository;

    // @Autowired
    // private ClientRepository  clientRepository;






    public ResponseEntity<?> All_Invoices()  {

        List<Invoices> All_Invoices = invoiceRepository.findAllActive();

        // for(Invoices invoice : All_Invoices) {

        //     Client client = clientRepository.findById(invoice.getClient_id()).get();
            
        //     invoice.setClient(client);
        // }

        return ResponseEntity.ok().body(new Response(true, "", All_Invoices));
    }






    public ResponseEntity<?> Add_Invoice(Map<String, Object> body) {

        Invoices invoice = new Invoices();
        invoice.setDeleted(false);

        if(body != null){
            try {
                
                invoice.setStatus("pending");
                // if(body.get("client_id")!=null)invoice.setClient_id(Long.valueOf((String) body.get("client_id")));
                // if(body.get("project_id")!=null) invoice.setProject_id(Long.valueOf((String) body.get("project_id")));
                
                if(body.get("amount") != null)invoice.setAmount(Double.valueOf((String) body.get("amount")));
                if(body.get("status")!=null)invoice.setStatus((String) body.get("status"));
                if(body.get("invoice_date")!=null)invoice.setInvoice_date((String) body.get("invoice_date"));
                if(body.get("due_date")!=null)invoice.setDue_date((String) body.get("due_date"));
                
                if(body.get("client_name")!=null)invoice.setClient_name((String) body.get("client_name"));
                if(body.get("project_name")!=null)invoice.setProject_name((String) body.get("project_name"));
                if(body.get("client_email")!=null)invoice.setClient_email((String) body.get("client_email"));
                if(body.get("client_address")!=null)invoice.setClinet_address((String) body.get("client_address"));
                if(body.get("billing_address")!=null)invoice.setBilling_address((String) body.get("billing_address"));
                

                invoice = invoiceRepository.save(invoice);
                // System.out.println("Add : " +invoice.getInvoice_id());

                List<InvoiceItems> invoiceItems = new ArrayList<>();
                if(body.get("items")!=null){
                    List<Map<String,Object>> items = (List<Map<String,Object>>) body.get("items");
                    
                    for(Map<String,Object> item : items){
                        InvoiceItems invoiceItem = new InvoiceItems();
                        try {
                            // System.out.println("Add : " +invoice.getInvoice_id());
                            invoiceItem.setInvoice_id(invoice.getInvoice_id());
                            if(item.get("name")!=null)invoiceItem.setName((String) item.get("name"));
                            if(item.get("description")!=null)invoiceItem.setDescription((String) item.get("description"));
                            if(item.get("quantity")!=null)invoiceItem.setQuantity(Long.valueOf((String) item.get("quantity")));
                            if(item.get("unit_cost")!=null)invoiceItem.setUnit_cost(Double.valueOf((String) item.get("unit_cost")));
    
                            invoiceItemRepository.save(invoiceItem);
                            invoiceItems.add(invoiceItem);
                        } catch (Exception e) {
                            System.out.println(e.getMessage()+"-> 1");
                            return ResponseEntity.badRequest().body(e.getMessage());
                        }
                    }
                }

                invoice.setInvoiceItems(invoiceItems);

                // Client client = clientRepository.findByClientId(invoice.getClient_id());
                // invoice.setClient(client);

                
                
            } catch (Exception e) {
                System.out.println(e.getMessage()+"-> 2");
                return ResponseEntity.badRequest().body(e.getMessage());
            }

            return ResponseEntity.ok().body(new Response(true,"Invoice added successfully!",invoice));
        }
        return ResponseEntity.badRequest().body("Invalid request!");
    }






    public ResponseEntity<?> Update_Invoice(Long id,Map<String, Object> body) {

        try {
            Invoices invoice = invoiceRepository.findByInvoiceId(id);

            List<InvoiceItems> invoiceItems = new ArrayList<InvoiceItems>();
        
            if(invoice != null && body!= null){
                // if(body.get("cleint_id")!=null)invoice.setClient_id(Long.valueOf((String) body.get("client_id")));
                // if(body.get("project_id")!=null) invoice.setProject_id(Long.valueOf((String) body.get("project_id")));
                if(body.get("amount") != null)invoice.setAmount(Double.valueOf((String) body.get("amount")));
                if(body.get("status")!=null)invoice.setStatus((String) body.get("status"));
                if(body.get("invoice_data")!=null)invoice.setInvoice_date((String) body.get("invoice_date"));
                if(body.get("due_date")!=null)invoice.setDue_date((String) body.get("due_date"));

                if(body.get("client_name")!=null)invoice.setClient_name((String) body.get("client_name"));
                if(body.get("project_name")!=null)invoice.setProject_name((String) body.get("project_name"));
                if(body.get("client_email")!=null)invoice.setClient_email((String) body.get("client_email"));
                if(body.get("client_address")!=null)invoice.setClinet_address((String) body.get("client_address"));
                if(body.get("billing_address")!=null)invoice.setBilling_address((String) body.get("billing_address"));

                invoice = invoiceRepository.save(invoice);

                // System.out.println("Update : " +invoice.getInvoice_id());
    
                if(body.get("items")!=null){
                    List<Map<String,Object>> items = (List<Map<String,Object>>) body.get("items");
                    for(Map<String,Object> item : items){
                        InvoiceItems invoiceItem = new InvoiceItems();
    
                        if(item.get("item_id")!=null)
                            invoiceItem = invoiceItemRepository.findByItemId(Long.valueOf((String) item.get("item_id")));

                        if(invoiceItem != null){
                            try {
                                // System.out.println("Update : " +invoice.getInvoice_id());
                                invoiceItem.setInvoice_id(invoice.getInvoice_id());
                                if(item.get("name")!=null)invoiceItem.setName((String) item.get("name"));
                                if(item.get("description")!=null)invoiceItem.setDescription((String) item.get("description"));
                                if(item.get("quantity")!=null)invoiceItem.setQuantity(Long.valueOf((String) item.get("quantity")));
                                if(item.get("unit_cost")!=null)invoiceItem.setUnit_cost(Double.valueOf((String) item.get("unit_cost")));
                                
                                invoiceItems.add(invoiceItem);
                                invoiceItemRepository.save(invoiceItem);
                            } catch (Exception e) {
                                System.out.println(e.getMessage());
                                return ResponseEntity.badRequest().body(e.getMessage());
                            }
                        }

                        
                    }
                }
                
                // Client client = clientRepository.findByClientId(invoice.getClient_id());
                // invoice.setClient(client);

                invoice.setInvoiceItems(invoiceItems);
    
                return ResponseEntity.ok().body(new Response(true,"Invoice updated successfully!",invoice));
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }


        return ResponseEntity.badRequest().body("Invalid request!");
        
        
    }





    public ResponseEntity<?>  One_Invoices(Long id) {

        Invoices invoice = invoiceRepository.findByInvoiceId(id);
        
        if(invoice == null)return ResponseEntity.badRequest().body("Invoice not found!");

        List<InvoiceItems> items = invoiceItemRepository.findAllByInvoiceId(id);

        // Client client = clientRepository.findByClientId(invoice.getClient_id());

        invoice.setInvoiceItems(items);
        // invoice.setClient(client);


        return ResponseEntity.ok().body(new Response(true,"Invoice found!",invoice));
    }






    public ResponseEntity<?> Delete_Invoice(Long id, Map<String, Object> body) {

        try {
            Invoices invoice = invoiceRepository.findByInvoiceIdForDelete(id);

            if(invoice == null)return ResponseEntity.badRequest().body("Invoice not found!");

            invoice.setDeleted((boolean)body.get("deleted"));

            invoiceRepository.save(invoice);

            return ResponseEntity.ok().body(new Response(true,"Invoice deleted successfully!",null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    




}