import { Component, HostListener, signal, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly document = inject(DOCUMENT);
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  readonly navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  constructor() {
    effect(() => {
      if (this.isMobileMenuOpen()) {
        this.document.body.classList.add('menu-open');
      } else {
        this.document.body.classList.remove('menu-open');
      }
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 768 && this.isMobileMenuOpen()) {
      this.closeMenu();
    }
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    if (this.isMobileMenuOpen()) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMobileMenuOpen.set(false);
  }

  scrollTo(event: Event, href: string) {
    event.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeMenu();
  }
}
