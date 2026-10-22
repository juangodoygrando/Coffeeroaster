# Coffeeroasters

Coffeeroasters is a multi-page web application built with Angular 19 for a coffee subscription service. It includes a landing page, an About Us page and an interactive step-by-step wizard where users customize their coffee plan, see the price update in real time and confirm their order through a responsive interface.

👉 [Go to site](https://coffeeroasters-sprint5.netlify.app/)

<!-- Add your demo screenshots here -->
<!-- ![Desktop View](public/assets/demo/demo-desktop.png) -->
<!-- ![Mobile View](public/assets/demo/demo-mobile.png) -->

## Pages

| Route | Page | Content |
|-------|------|---------|
| `/home` | Home | Hero, our collection, why choose us and how it works |
| `/about-us` | About Us | Hero, our commitment, uncompromising quality and our headquarters |
| `/create-plan` | Create plan | Hero, how it works and the subscription wizard |

Any unknown route redirects to `/home`.

## Objectives

- **Interactive Subscription Wizard:** A 5-step wizard that guides users through creating their coffee subscription plan.
- **Real-Time Price Calculation:** Pricing updates instantly based on the selected brew method, bean type, quantity and delivery frequency.
- **Reusable Components:** Shared UI pieces (hero, image + text section, steps, cards) configured through signal inputs instead of duplicated markup.
- **Modern Angular Architecture:** Standalone components, signals for state management and the built-in control flow syntax.
- **Responsive Design:** Mobile-first layouts with Tailwind CSS for mobile, tablet and desktop.
- **Accessibility:** Semantic HTML (`header`, `nav`, `footer`, `address`), ARIA attributes and descriptive alt text.
- **Type-Safe Development:** Strict TypeScript with interfaces for every data structure.
- **Unit Testing:** Tests for the core business logic, including pricing calculations and order validation.

## Features

### Coffee Plan Customization
- **Brew Method:** Choose between Capsule, Filter, or Espresso
- **Bean Type:** Select Single Origin, Decaf, or Blended
- **Bag Size:** Pick 250g, 500g, or 1000g quantities
- **Grind Level:** Wholebean, Filter, or Cafetiére (disabled for Capsule)
- **Delivery Frequency:** Weekly, Every 2 weeks, or Monthly

### Smart Features
- Automatic grind level disable when Capsule is selected
- Real-time order summary with formatted description
- Modal confirmation with complete order review
- Instant price calculation based on all selections

### Layout
- Full-screen mobile menu with the same navigation links as the desktop header and the footer
- Responsive images served per breakpoint with `<picture>` and `<source>`
- Social icons recolored on hover using CSS masks

## Folder Structure

```
coffeeroasters/
│
├── public/assets/               # Static assets (mobile, tablet and desktop versions)
│   ├── shared/                  # Logos and icons
│   ├── home/                    # Home page assets
│   ├── about/                   # About Us page assets
│   └── plan/                    # Create plan page assets
│
├── src/
│   ├── app/
│   │   ├── core/layout/         # App shell
│   │   │   ├── header/          # Header and mobile menu
│   │   │   └── footer/          # Footer
│   │   │
│   │   ├── features/            # One folder per page
│   │   │   ├── home/
│   │   │   │   ├── pages/home-page/
│   │   │   │   └── sections/
│   │   │   │       ├── our-collection/
│   │   │   │       └── why-choose-us/
│   │   │   │
│   │   │   ├── about-us/
│   │   │   │   ├── pages/about-us-page/
│   │   │   │   └── sections/
│   │   │   │       ├── our-commitment/
│   │   │   │       ├── uncompromising-quality/
│   │   │   │       └── our-headquarters/
│   │   │   │           └── headquarter-card/
│   │   │   │
│   │   │   └── create-plan/
│   │   │       ├── pages/create-plan-page/
│   │   │       └── sections/
│   │   │           ├── stepper/       # Wizard container
│   │   │           ├── step-item/     # Sidebar navigation
│   │   │           ├── step-content/  # Accordion with options
│   │   │           └── step-summary/  # Order summary
│   │   │
│   │   ├── shared/
│   │   │   ├── components/      # Reusable components
│   │   │   │   ├── hero-section/
│   │   │   │   ├── image-text-section/
│   │   │   │   ├── steps-section/
│   │   │   │   ├── button-create-plan/
│   │   │   │   └── modal/
│   │   │   └── interfaces/      # TypeScript interfaces
│   │   │
│   │   ├── data/                # Static content
│   │   │   ├── navigation.data.ts     # Header/footer links and social links
│   │   │   ├── how-it-works.data.ts
│   │   │   ├── our-collection.data.ts
│   │   │   ├── headquarters.data.ts
│   │   │   └── steppers.data.ts       # Wizard steps and options
│   │   │
│   │   ├── services/            # Application services
│   │   │   ├── coffee-plan.service.ts # Order state management
│   │   │   ├── pricing.service.ts     # Price calculations
│   │   │   ├── wizard.service.ts      # Wizard navigation
│   │   │   └── test/                  # Service tests
│   │   │
│   │   ├── app.component.ts     # Root component
│   │   ├── app.config.ts        # App configuration
│   │   └── app.routes.ts        # Route definitions
│   │
│   ├── index.html
│   ├── styles.css               # Global styles
│   └── _redirects               # Netlify SPA configuration
│
├── angular.json
├── tailwind.config.js           # Tailwind theme (design tokens)
├── eslint.config.js
└── package.json
```

### Naming conventions
- Folders and files use kebab-case (`our-headquarters.component.ts`).
- Every component selector uses the `coffeeroasters-` prefix.
- Page content lives in `data/` files and is passed to components through inputs.

## Technologies Used

- **Angular 19** - Standalone components, signals and built-in control flow
- **TypeScript 5.7** - Strict type checking enabled
- **Tailwind CSS 3.4** - Utility-first CSS with custom design tokens
- **Karma + Jasmine** - Unit testing
- **ESLint** - Linting with Angular-specific rules
- **Netlify** - Deployment

## Architecture Highlights

### Reusable components with signal inputs
Shared components receive their content through inputs, so the same component renders different pages or sections:
```typescript
@Component({
  selector: 'coffeeroasters-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  hero = input.required<HeroData>();
}
```
```html
<coffeeroasters-hero-section [hero]="heroAboutUs" />
```

### Data separated from markup
Repeated blocks are rendered from data files with `@for`:
```html
@for (headquarter of headquarters; track headquarter.country) {
  <coffeeroasters-headquarter-card [headquarter]="headquarter" />
}
```
Adding a new headquarters or navigation link only requires a new entry in `data/`.

### Design tokens
The style guide colors and fonts are defined once in `tailwind.config.js` and used as utilities (`bg-coffee-dark-blue`, `text-coffee-grey`, `font-fraunces`, `font-barlow`):
```js
colors: {
  coffee: {
    cyan: "#0E8784",
    "dark-blue": "#333D4B",
    "pale-orange": "#FDD6BA",
    cream: "#FEFCF7",
    grey: "#83888F",
  },
},
```

### State management with signals
```typescript
// CoffeePlanService
orderState = signal<OrderState>({
  brewMethod: null,
  beanType: null,
  bagSize: null,
  grindLevel: null,
  delivery: null
});

isOrderComplete = computed(() => /* validation logic */);
```

## Installation and Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/juangodoygrando/Coffeeroaster.git
   cd Coffeeroaster
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`

4. **Run unit tests:**
   ```bash
   npm test
   ```

5. **Run linting:**
   ```bash
   npm run lint
   ```

6. **Build for production:**
   ```bash
   npm run build
   ```
   Build artifacts will be stored in the `dist/cofferoasters` directory.

## Main Dependencies

| Package | Version | Description |
|---------|---------|-------------|
| @angular/core | ^19.2.0 | Angular core framework |
| @angular/router | ^19.2.0 | Angular routing |
| rxjs | ~7.8.0 | Reactive extensions |
| tailwindcss | ^3.4.1 | CSS framework |
| typescript | ~5.7.2 | TypeScript compiler |
| karma | ~6.4.0 | Test runner |
| jasmine-core | ~5.6.0 | Testing framework |

(See `package.json` for the complete list of dependencies)

## Services

### CoffeePlanService
Manages the coffee subscription order state:
- `set(step, value)` - Updates a specific field
- `get()` - Returns current order state
- `isOrderComplete()` - Validates if all required fields are filled
- `getSelectedOptions()` - Returns detailed option information

### PricingService
Handles dynamic price calculation:
- `calculatePrice()` - Computes total price based on selections
- Considers brew method, bean type, bag size, and delivery frequency
- Includes delivery fee calculations

### WizardService
Controls wizard navigation:
- `currentStep` - Currently active step
- `setCurrentStep(step)` - Navigate to a specific step

## Testing

```bash
npm test
```

Service tests cover:
- Order state initialization
- State updates and validation
- Price calculation accuracy
- Special cases (Capsule without grind level)

Test files are located in `src/app/services/test/`.

## Deployment

The project is configured for Netlify:
- `_redirects` handles SPA routing
- Production build with budget limits
- Hashed assets for cache busting

## Notes

- Requires a modern browser with ES2022 support.
- Fonts: Fraunces (headings) and Barlow (body), loaded from Google Fonts.
