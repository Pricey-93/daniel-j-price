<script lang="ts">
    import TechBadge from "./TechBadge.svelte";
  import TimelineIcon from "./TimelineIcon.svelte";
</script>

<ol class="timeline max-sm:timeline-compact timeline-vertical" role="list">
  <li>
    <TimelineIcon />
    <div class="card shadow-sm timeline-start mb-5 bg-base-100">
      <div class="card-body">
        <time class="font-mono italic md:text-end">July - 2025</time>
        <h4 class="card-title font-black">Open to new opportunities!</h4>
        <p>Continuous learning and open to collaboration.</p>
      </div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <TimelineIcon />
    <div class="card shadow-sm timeline-end mb-5 bg-base-100">
      <div class="card-body">
        <time class="font-mono italic">March - 2024</time>
        <h4 class="card-title font-black">Element, Digital Specs</h4>
        <ul class="list-disc">
          <li>
            Led the development of bespoke .NET Core software for a major retail client, taking full
            autonomy of the project and liasing with cross-functional teams to deliver on client
            requests.
          </li>
          <li>
            Contributed to migrating legacy .NET Framework code to .NET Core, leveraging Blazor, SQLServer and EF Core to enhance performance, and scalability.
          </li>
          <li>
            Actively participated in daily development standups and efficiently managed tasks using Jira, 
            ensuring timely project completion.
          </li>
          <li>
            Maintained legacy code written in .NET Framework MVC demonstrating an understanding of JavaScript, Ajax,
            and JQuery.
          </li>
          <li>
            Efficiently worked in a remote setting, communicating via Microsoft Teams and managing code versions in 
            Git and Github.
          </li>
        </ul>
        <div class="card-actions justify-end">
          <TechBadge text="C#" />
          <TechBadge text="JavaScript" />
          <TechBadge text=".NET " />
          <TechBadge text=".NET Framework" />
          <TechBadge text="Blazor" />
          <TechBadge text="SQL Server" />
          <TechBadge text="EF Core" />
        </div>
      </div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <TimelineIcon />
    <div class="card shadow-sm timeline-start mb-5 bg-base-100">
      <div class="card-body">
        <time class="font-mono italic md:text-end">October - 2023</time>
        <h4 class="card-title font-black">Sustainability Page</h4>
        <ul class="list-disc">
          <li>
            Co-operated seamlessly with UX/UI designers to translate designs into user-friendly,
            maintainable, responsive and reusable React components with Tailwind CSS.
          </li>
          <li>
            Conducted code reviews, giving specific and constructive feedback on other developers'code.
          </li>
          <li>
            Self-managed the assignment and completion of tasks and regularly reported progress at
            weekend standups.
          </li>
          <li>
            Successfully contributed to the code-base in a fully remote environment, commiting time to
            the project on weekends.
          </li>
        </ul>
        <div class="card-actions justify-end">
          <TechBadge text="TypeScript" />
          <TechBadge text="Node.js" />
          <TechBadge text="Next.js" />
          <TechBadge text="React" />
          <TechBadge text="Tailwind CSS" />
        </div>
      </div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <TimelineIcon />
    <div class="card shadow-sm timeline-end mb-5 bg-base-100">
      <div class="card-body">
        <time class="font-mono italic md:text-end">July - 2023</time>
        <h4 class="card-title font-black">Code Chrysalis</h4>
        <p>Intensive Full Stack Software Development Program</p>
        <div class="card-actions justify-end">
          <TechBadge text="JavaScript" />
          <TechBadge text="Node.js" />
          <TechBadge text="React" />
          <TechBadge text="React-Native" />
          <TechBadge text="Postgres" />
          <TechBadge text="Prisma" />
        </div>
      </div>
    </div>
    <hr />
  </li>

  <li>
    <div class="card shadow-sm timeline-middle bg-base-100">
      <div class="card-body">
        <time class="font-mono italic md:text-end">May - 2022</time>
        <h4 class="card-title font-black">Graduation</h4>
        <p>BSc Computer Science and Japanese Studies</p>
        <ul class="list-disc">
          <li>
            Fundamentals of Programming
          </li>
          <li>
            Data Structures and Algorithms
          </li>
          <li>
            Software Design Patterns
          </li>
        </ul>
        <div class="card-actions justify-end">
          <TechBadge text="Python" />
          <TechBadge text="Java" />
          <TechBadge text="C#" />
          <TechBadge text="C++" />
          <TechBadge text="C" />
        </div>
      </div>
    </div>
  </li>
</ol>