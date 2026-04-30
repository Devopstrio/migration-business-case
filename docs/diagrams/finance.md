# Finance & Strategy Modeling Diagrams

## 11. Comprehensive TCO Calculation Logic
*The deep-dive into on-prem vs. cloud cost components.*

```mermaid
graph TD
    subgraph "On-Premises Components"
        H[Hardware Depreciation]
        L[Maintenance/Support]
        P[Power/Cooling/Rack]
        S[SysAdmin Labor]
        W[Software Licensing]
    end
    subgraph "Cloud Components"
        I[Compute/SaaS/PaaS Rates]
        N[Networking/Egress]
        Sec[Security Tools]
        Ops[CloudOps Labor]
    end
    subgraph "Transformation Costs"
        M[Migration Services]
        T[Training/Reskilling]
        D[Migration Double Bubble]
    end

    H --> TCO[5-Year TCO Comparison]
    L --> TCO
    P --> TCO
    S --> TCO
    W --> TCO
    I --> TCO
    N --> TCO
    Sec --> TCO
    Ops --> TCO
    M --> TCO
    T --> TCO
    D --> TCO
```

## 15. NPV (Net Present Value) Discounting Flow
```mermaid
graph LR
    Cash1[Year 1 Cash Flow] --> Disc1[Discount: (1+r)^1]
    Cash2[Year 2 Cash Flow] --> Disc2[Discount: (1+r)^2]
    Cash3[Year 3 Cash Flow] --> Disc3[Discount: (1+r)^3]
    Disc1 --> Sum[Sum of Present Values]
    Disc2 --> Sum
    Disc3 --> Sum
    Sum --> NPV[Subtract Initial Migration Investment]
```

## 20. 6R Migration Strategy Decision Logic (Extended)
```mermaid
graph TD
    App[Discovery Asset] --> Retire{End of Life?}
    Retire -->|Yes| R1[Retire]
    Retire -->|No| Val{Business Value?}
    Val -->|Low| R2[Retain]
    Val -->|High| Debt{Tech Debt High?}
    Debt -->|Yes| Modernize{SaaS Available?}
    Modernize -->|Yes| R3[Repurchase]
    Modernize -->|No| R4[Refactor]
    Debt -->|No| Move{Complex Config?}
    Move -->|Yes| R5[Replatform]
    Move -->|No| R6[Rehost]
```
