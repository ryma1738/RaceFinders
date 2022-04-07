package racefinder.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import racefinder.Models.Account;
import racefinder.Repository.AccountRepo;

@Service
public class AccountService {
    @Autowired
    public AccountRepo accountRepo;

    public List<Account> getAccounts() {
        return this.accountRepo.findAll();
    }

    public Account getAccount(long id) {
        Optional<Account> account = this.accountRepo.findById(id);
        if (account.isPresent()) {
            return account.get();
        } else return null;
    }

    public Account createAccount(Account account) {
        return this.accountRepo.save(account);
    }

    public Account updateAccount(Account account) {
        return this.accountRepo.save(account);
    }

    public String deleteAccount(long id) {
        try {
            this.accountRepo.deleteById(id);
            return "Account deleted successfully!";
        } catch (Exception e) {
            return "An error has occurred while trying to delete this account";
        }
    }
}
