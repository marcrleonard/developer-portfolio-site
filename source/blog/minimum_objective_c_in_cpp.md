Title: Calling Objective C from C++
Date: 2024-05-28 10:20:01 MST
Category: C++, Objective-C, CMake
Tags: python, django
Slug: minimum_objective_c_in_cpp.md
Authors: Marc Leonard
Summary: Calling Objective-C from C++ and CMake

## Calling Objective C from C++

Asset Veranda, the media asset manager I'm working on, uses largely platform-independent code. However, there are some specific functions that need to be called that are platform-specific.

For instance, there is a way to display a file in its native file browser (Finder for macOS or Windows Explorer for Windows). In the case of Windows, this is easy. Include the Windows header file and make a few COM calls. But in the case of macOS, you need to call either their Swift or Objective-C APIs.

Below, I've outlined the simplest way to do this using the CMake build system.

## `main.cpp`

    #include <iostream>

    #include "ApplePlatformOps.h"

    int main() {
        // wait for user input
        std::cout << "Press Enter to continue..." << std::endl;
        std::string filePath;
        ASelectFolder(filePath);
        std::cout << "Selected: " + filePath << std::endl;
        std::cin.get();
        return 0;
    }

## `ApplePlatformOps.h`

  #include <string>

  void ASelectFolder(std::string& filePath);

## `ApplePlatformOps.mm`

    #include "ApplePlatformOps.h"
    #include <Cocoa/Cocoa.h>

    void ASelectFolder(std::string& filePath) {
        NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
        NSOpenPanel *openPanel = [NSOpenPanel openPanel];

        [openPanel setCanChooseFiles:NO];
        [openPanel setCanChooseDirectories:YES];
        [openPanel setAllowsMultipleSelection:NO];

        NSInteger result = [openPanel runModal];

        if (result == NSModalResponseOK) {
            NSURL *url = [openPanel URL];
            NSString *pathString = [url path];
            const char *utf8String = [pathString UTF8String];
            filePath = std::string(utf8String);
        }

        [pool release];
    }

## CMake file

    cmake_minimum_required(VERSION 3.10)
    project(MyProject)
    
    
    set(CMAKE_CXX_STANDARD 17)
    
    # Add the path to the FindCocoa.cmake module
    set(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} "${CMAKE_SOURCE_DIR}/cmake/")
    
    # Specify the source files
    set(SOURCE_FILES
            main.cpp
    )
    
    set(HEADER_FILES
    )
    
    if(APPLE)
        # Add the platform specific files
        list(APPEND SOURCE_FILES
                ApplePlatformOps.mm
                ApplePlatformOps.h
        )
        # Add the platform specific headers
        list(APPEND HEADER_FILES
                ApplePlatformOps.h
        )
    
        find_library(COCOA_LIBRARY Cocoa)
    
    endif()
    
    add_executable(MyProject ${SOURCE_FILES} ${HEADER_FILES})
    
    
    if(APPLE)
        # Link the necessary libraries
        target_link_libraries(MyProject ${COCOA_LIBRARY})
    endif()

