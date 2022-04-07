package racefinder.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import racefinder.Models.Account;

public interface AccountRepo extends JpaRepository<Account, Long> {
    
}
