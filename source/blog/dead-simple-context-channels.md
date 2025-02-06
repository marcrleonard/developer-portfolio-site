Title: A Dead Simple Example of Goroutines, Contexts, and Channels
Date: 2025-02-06 16:30:00 MST
Category: Go
Tags: go
Slug: dead-simple-goroutines-contexts-channels
Authors: Marc Leonard
Summary: A Dead Simple Example of Goroutines, Contexts, and Channels.

I've been using Go for about 6 months. Until now, I've (quite successfully) been hand waving away contexts, goroutines, and channels. I finally decided to functionally understand them. I created a dead-simple example of a CLI application that exercises all three. 

## Contexts

| Context Type | 	Cancels When?                                    | 	Use Case                   |
|------------|---------------------------------------------------|-----------------------------|
| WithCancel	| Manually via cancel()                             | 	User input, external event |
| WithTimeout| 	After a set time (5s)	| API calls, background jobs  |
| WithDeadline	| At a fixed timestamp (3 PM)	| Scheduled tasks             |

### `context.WithCancel` (Manual Cancellation)

- Used when you want to cancel at an arbitrary time.
- The function keeps running until you explicitly call cancel().
- Example use case: Stopping a process based on user input or external events.

```go
ctx, cancel := context.WithCancel(context.Background())
go longTask(ctx)

// Some time later...
cancel() // Stops the goroutine at an arbitrary time.
```

### `context.WithTimeout` (Automatic Timeout)

- Stops execution after a fixed duration.
- You don't need to call cancel(), it cancels automatically when the time is up.
- Example use case: Ensuring an operation doesn’t run indefinitely.

```go
ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
defer cancel() // Ensures resources are cleaned up.

go longTask(ctx)

// No need to call cancel(), it will be triggered automatically in 5 sec.
```

### `context.WithDeadline` (Specific Time Deadline)

- Like WithTimeout, but you specify an exact time instead of a duration.
- Example use case: If a task must complete before a certain timestamp.

```go 
deadline := time.Now().Add(10 * time.Second) // Hard deadline 10 sec from now
ctx, cancel := context.WithDeadline(context.Background(), deadline)
defer cancel()

go longTask(ctx)
```

## Dead Simple Example

Note: The user input is done on the main thread. If it was put in another goroutine, interesting things could be done like checking for the process to finish on its own. You could further pass a mutex into both goroutines to avoid race conditions of user input canceling the process, and the 'long function' finishing on its own.

```go
package main

import (
	"context"
	"fmt"
	"time"
)

// Long-running function that checks for cancellation
func longRunningTask(ctx context.Context, resultChan chan string) {
	start := time.Now()
	for {
		duration := time.Since(start)
		select {
		case <-ctx.Done():
			resultChan <- fmt.Sprintf("Task stopped by user after %s", duration.String()) // Send the result to main
			return

		default:
			fmt.Println("Working...")
			time.Sleep(1 * time.Second) // Simulate work
		}
	}
}

func main() {
	ctx, cancel := context.WithCancel(context.Background())

	// Create a channel to receive the result
	resultChan := make(chan string)

	// Start the long-running task in a goroutine
	go longRunningTask(ctx, resultChan)

	// Wait for user input
	fmt.Println("Press ENTER to cancel the task...")
	fmt.Scanln()

	// Cancel the context when the user inputs something
	cancel()

	// Wait for the result from the goroutine
	result := <-resultChan
	fmt.Println("Task finished after: ", result)
}
```