Title: A Dead Simple Example of Goroutines, Contexts, and Channels
Date: 2025-02-06 16:30:00 MST
Category: Go
Tags: go
Slug: dead-simple-goroutines-contexts-channels
Authors: Marc Leonard
Summary: A Dead Simple Example of Goroutines, Contexts, and Channels.

I've been using Go for about 6 months now. Until now, I've been hand waving away contexts, goroutines, and channels. I finally decided to read and understand them. I created a dead-simple example of a CLI application that exercises all three. 

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