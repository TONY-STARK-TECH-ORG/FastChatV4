import { LobeChat, LobeChatProps } from '@lobehub/ui/brand';
import { memo } from 'react';

import { isCustomBranding } from '@/const/version';

import CustomLogo from './Custom';

export const ProductLogo = memo<LobeChatProps>((props) => {
  if (isCustomBranding) {
    return <CustomLogo {...props} />;
  }
  console.log(props);
  return (
    <svg
      height="25.956"
      viewBox="0.2400000000000002 -3.432491232380257 95.06400000000002 31.956491232380262"
      width="89.064"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="#000"
        fill-rule="evenodd"
        font-size="9pt"
        id="svgGroup"
        stroke="#000"
        stroke-linecap="round"
        stroke-width="0.25mm"
        style={{
          fill: '#000',
          stroke: '#000',
          strokeWidth: '0.25mm',
        }}
      >
        <path
          d="M 89.064 23.76 L 86.292 25.884 L 78.336 15.084 L 70.632 25.812 L 67.932 23.76 L 76.392 12.708 L 68.292 2.124 L 71.136 0 L 78.444 10.224 L 85.68 0.108 L 88.344 2.124 L 80.496 12.528 L 89.064 23.76 Z M 3.42 25.524 L 0 25.524 L 0 0.324 L 14.94 0.324 L 14.94 3.276 L 3.42 3.276 L 3.42 10.98 L 13.032 10.98 L 13.032 13.788 L 3.42 13.788 L 3.42 25.524 Z M 37.692 24.012 L 39.06 21.312 A 6.68 6.68 0 0 0 40.192 22.077 Q 40.747 22.379 41.408 22.622 A 11.005 11.005 0 0 0 41.418 22.626 A 8.666 8.666 0 0 0 44.158 23.143 A 9.887 9.887 0 0 0 44.46 23.148 Q 46.401 23.148 47.425 22.53 A 2.786 2.786 0 0 0 47.502 22.482 A 2.682 2.682 0 0 0 48.054 22.017 A 1.819 1.819 0 0 0 48.528 20.772 A 2.564 2.564 0 0 0 48.415 19.999 A 2.236 2.236 0 0 0 48.15 19.44 Q 47.788 18.888 46.848 18.353 A 8.031 8.031 0 0 0 46.764 18.306 A 10.247 10.247 0 0 0 46.046 17.948 Q 45.284 17.602 44.209 17.224 A 37.295 37.295 0 0 0 43.848 17.1 Q 42.075 16.493 40.9 15.73 A 6.96 6.96 0 0 1 39.906 14.958 A 4.077 4.077 0 0 1 38.72 12.799 A 6.046 6.046 0 0 1 38.592 11.52 A 4.363 4.363 0 0 1 40.013 8.275 A 6.287 6.287 0 0 1 40.482 7.866 A 6.396 6.396 0 0 1 42.655 6.769 Q 43.575 6.496 44.679 6.411 A 13.51 13.51 0 0 1 45.72 6.372 Q 47.52 6.372 48.924 6.75 A 13.957 13.957 0 0 1 50.412 7.238 A 11.2 11.2 0 0 1 51.444 7.704 L 50.544 10.368 Q 49.572 9.792 48.33 9.432 A 9.009 9.009 0 0 0 46.716 9.127 A 11.461 11.461 0 0 0 45.576 9.072 A 7.427 7.427 0 0 0 44.519 9.142 Q 43.981 9.22 43.545 9.383 A 3.063 3.063 0 0 0 42.732 9.828 Q 42.087 10.33 41.87 10.895 A 1.63 1.63 0 0 0 41.76 11.484 A 1.771 1.771 0 0 0 42.298 12.763 A 2.55 2.55 0 0 0 42.516 12.96 Q 43.259 13.562 45.395 14.268 A 30.341 30.341 0 0 0 45.468 14.292 A 24.391 24.391 0 0 1 47.29 14.975 Q 49.023 15.712 50.016 16.534 A 5.381 5.381 0 0 1 50.436 16.92 A 4.895 4.895 0 0 1 51.834 20.249 A 6.442 6.442 0 0 1 51.84 20.52 Q 51.84 22.949 49.95 24.392 A 5.983 5.983 0 0 1 49.806 24.498 Q 47.772 25.956 44.352 25.956 A 14.396 14.396 0 0 1 42.242 25.808 A 11.141 11.141 0 0 1 40.518 25.416 A 11.118 11.118 0 0 1 39.135 24.881 Q 38.32 24.498 37.692 24.012 Z M 56.88 19.08 L 56.88 10.296 L 53.64 10.296 L 53.64 7.488 L 56.952 7.488 L 57.636 1.584 L 60.12 1.584 L 60.12 7.488 L 65.304 7.488 L 65.304 10.296 L 60.12 10.296 L 60.12 19.332 A 7.761 7.761 0 0 0 60.18 20.339 Q 60.325 21.436 60.813 22.043 A 2 2 0 0 0 61.002 22.248 Q 61.884 23.076 63.108 23.076 Q 64.008 23.076 64.818 22.788 A 9.264 9.264 0 0 0 65.962 22.295 A 8.196 8.196 0 0 0 66.312 22.104 L 67.212 24.696 A 6.677 6.677 0 0 1 66.629 25.004 Q 66.341 25.14 66 25.275 A 15.611 15.611 0 0 1 65.268 25.542 Q 64.044 25.956 62.712 25.956 A 6.598 6.598 0 0 1 60.846 25.705 A 5.016 5.016 0 0 1 58.446 24.174 A 5.802 5.802 0 0 1 57.284 22.049 Q 56.88 20.762 56.88 19.08 Z M 29.916 8.316 L 29.916 6.804 L 32.868 6.804 L 32.868 20.988 A 4.374 4.374 0 0 0 32.905 21.577 Q 32.997 22.254 33.323 22.597 A 1.068 1.068 0 0 0 33.534 22.77 Q 34.2 23.184 34.992 23.184 L 34.308 25.704 A 6.38 6.38 0 0 1 32.773 25.534 Q 30.675 25.013 30.132 22.896 A 7.671 7.671 0 0 1 29.013 24.129 A 10.259 10.259 0 0 1 27.882 25.002 A 5.374 5.374 0 0 1 26.099 25.759 Q 25.372 25.93 24.526 25.953 A 9.794 9.794 0 0 1 24.264 25.956 Q 21.924 25.956 20.016 24.768 A 8.261 8.261 0 0 1 17.347 22.058 A 10.052 10.052 0 0 1 16.974 21.402 A 9.802 9.802 0 0 1 16.027 18.543 A 13.192 13.192 0 0 1 15.84 16.272 A 11.931 11.931 0 0 1 16.199 13.295 A 10.068 10.068 0 0 1 16.974 11.232 Q 18.108 9 20.106 7.686 A 8.027 8.027 0 0 1 24.136 6.388 A 9.86 9.86 0 0 1 24.696 6.372 A 8.13 8.13 0 0 1 26.422 6.549 A 6.733 6.733 0 0 1 27.63 6.93 A 9.361 9.361 0 0 1 29.173 7.756 A 7.957 7.957 0 0 1 29.916 8.316 Z M 29.628 20.736 L 29.628 10.692 Q 28.656 10.008 27.486 9.594 A 7.338 7.338 0 0 0 25.02 9.18 A 5.733 5.733 0 0 0 23.23 9.451 A 5.048 5.048 0 0 0 21.978 10.062 A 5.868 5.868 0 0 0 20.171 12.015 A 7.187 7.187 0 0 0 19.908 12.51 A 7.439 7.439 0 0 0 19.277 14.554 A 9.964 9.964 0 0 0 19.152 16.164 Q 19.152 18.18 19.908 19.746 Q 20.664 21.312 21.996 22.194 Q 23.328 23.076 24.984 23.076 Q 26.352 23.076 27.576 22.41 A 7.002 7.002 0 0 0 29.275 21.131 A 6.506 6.506 0 0 0 29.628 20.736 Z"
          vector-effect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
});
