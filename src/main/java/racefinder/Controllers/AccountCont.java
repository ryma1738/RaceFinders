package racefinder.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import racefinder.Models.Account;
import racefinder.Service.AccountService;

@RestController
public class AccountCont {

    @Autowired
    private AccountService accountService;

    @GetMapping("/account")
    public List<Account> getAccounts() {
        return accountService.getAccounts(); 
    }

    @GetMapping("/account/{id}")
    public Account getAccount(@PathVariable long id) {
        return accountService.getAccount(id);
    }

    @PostMapping("/account")
    public Account createAccount(@RequestBody Account account) {
        return accountService.createAccount(account);
    }

    @PutMapping("/account")
    public Account updateAccount(@RequestBody Account account) {
        return accountService.updateAccount(account);
    }

    @DeleteMapping("/account/{id}")
    public String deleteAccount(@PathVariable long id) {
        return accountService.deleteAccount(id);
    }
}
