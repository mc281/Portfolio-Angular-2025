
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParticlesBackgroundComponent } from './components/particles-background/particles-background.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParticlesBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  ngOnInit() {



  }

  ngAfterViewChecked() {

  }
}
