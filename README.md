# Farm-connect
the agricultural sector of uganda is facing a problem where farmers find it difficult to  access certified and trusted agricultural services within the current geographical location and track of  past records of the agricultural services provided.

## Updated System Architecture (Key Requirements)

```text
Farmers App (Flutter) / Web Dashboard (React)
                |
                | HTTPS API
                v
        Backend (Node.js + Express)
                |
    +-----------+-----------+------------------+
    |                       |                  |
Authentication        Service Logic       Notifications
    |                       |            (SMS/Reminders)
    v                       v
PostgreSQL (Supabase)   Maps APIs (GPS distance)
```

### Authentication page (updated)
Account creation should use:
- Username
- Phone number
- Password

### Service logic (updated)
- Show doctors/experts who are **scheduled (available)** and **not scheduled (unavailable)**.
- Show each doctor’s **specialization** (e.g., veterinary, agronomy, soil testing).
- Show nearby agro-stores where farmers can pick recommended medications/products.
