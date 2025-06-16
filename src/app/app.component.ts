import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { WhyMeSectionComponent } from "./why-me-section/why-me-section.component";
import { MySkillSectionComponent } from "./my-skill-section/my-skill-section.component";
import { ContactSectionComponent } from "./contact-section/contact-section.component";
import { ReferencesComponent } from "./references/references.component";
import { MenuBarComponent } from "./menu-bar/menu-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, HeroSectionComponent, WhyMeSectionComponent, MySkillSectionComponent, ContactSectionComponent, ReferencesComponent, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
