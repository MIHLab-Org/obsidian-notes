```dashboard
title: Home
rows:
  - columns:
      - width: 6
        widget:
          type: embed
          target: "[[Home/Panels/Now]]"
      - width: 3
        widget:
          type: embed
          target: "[[Home/Panels/Blocked]]"
      - width: 3
        widget:
          type: link
          target: "[[In Progress Papers/_Submissions/Submission plan]]"
          description: Journal plan and deadlines
  - columns:
      - width: 7
        widget:
          type: embed
          target: "[[Home/Panels/Spring timeline]]"
      - width: 5
        widget:
          type: embed
          target: "[[Home/Panels/Next]]"
  - columns:
      - width: 7
        widget:
          type: embed
          target: "[[Home/Panels/Submissions]]"
      - width: 5
        widget:
          type: embed
          target: "[[Home/Panels/MIHLab revenue]]"
  - columns:
      - widget:
          type: embed
          target: "[[Home/Panels/Courses]]"
```

Edit a project by opening its note in `Home/Projects` and changing `status` (Now, Next, Later, Blocked), `priority`, `next_action` or `deadline`. The tables update on their own.
