# MecanicaSolidosApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10 and Bootstrap 6.0.1.

The **MecanicaSolidosApp** is an educational application designed to assist in studying the Mechanics of Solids discipline. It offers a rich and interactive experience through various features:

- **Textual Content:** Provides detailed explanations of fundamental and advanced concepts in Mechanics of Solids.
- **Exercise Area:** Allows users to practice and consolidate their knowledge through practical activities.
- **Video Gallery:** Includes educational videos that complement the theoretical content and facilitate understanding of the covered topics.
- **Bibliographic References:** Offers reliable sources for additional study and deeper exploration of the discussed themes.

Currently, the content is mocked in JSON files or directly in HTML.

## Design and Color Choice

The visual identity was carefully crafted to provide a pleasant and effective experience:

- **Colors:** The initial palette was inspired by **FESA's** identity. However, to avoid overusing blue and yellow, which in their current tones may induce excessive comfort and even drowsiness, a variation of pink was introduced. This choice aims to capture users' attention, particularly considering that many Engineering students in the evening classes have a demanding work routine during the day.

- **Mobile Application:** For the mobile version, simpler and softer tones were used, considering that students might use the app during their commute to work or college, ensuring a lightweight and intuitive experience.

- **Layout:** The interface was designed to be simple and functional, catering to the needs of the academic audience. Intuitive navigation and direct access to key icons and content were prioritized to ensure efficient interaction.

---

# Future Updates Description

In the future, the main evolution will be the integration of an **API**, replacing mocked data. This change will enable more dynamic functionalities, such as user management and secure data storage.

## Planned Updates

1. **API:**  
   Development of a robust API for data consumption on the front-end, enabling greater dynamism and integration.

2. **Login Module:**  
   Implementation of secure authentication, allowing users to create accounts, save progress, and access a personalized area.

3. **Journey Mode:**  
   Introduction of an interactive mode that turns learning into a gamified experience, encouraging fun and engaging study.

4. **Logs:**  
   Implementation of a logging system to collect metrics, aiding in performance optimization, and identifying improvements in content and user experience.

5. **Inclusion of Other Subjects:**  
   Thanks to the modular architecture, it will be possible to add content from other disciplines or expand Mechanics of Solids topics easily.

---

## Technologies Considered for Updates

1. **Backend:**  
   - Use of **NestJS** to develop the API.

2. **Database:**  
   - **MySQL** for storing transactional data.  
   - **MongoDB** for efficient management of logs and telemetry data.

3. **Hosting:**  
   - Cloud solutions like **AWS**, **Azure**, or **Oracle**, configured with a single-service architecture.

These updates aim to provide a more robust, personalized platform with greater scalability, always focusing on the student experience.

---

## Development Server

Run `ng serve` to start the development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you modify any source files.

---

## Code Generation

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

---

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

---

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

---

## Running Integration Tests

Run `ng e2e` to execute end-to-end tests with a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

---

## Additional Help

For more help on Angular CLI, use `ng help` or check the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
