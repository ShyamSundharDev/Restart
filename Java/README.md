

Java is three things bundled as one: a programming language, the JVM (bytecode executor), and the JDK standard library
javac compiles source code to platform-neutral bytecode (.class); the JVM JIT translates it to native machine code at runtime
8 primitive types (int, double, boolean, char, long, float, byte, short) store values directly on the stack
Static typing forces type declarations at compile time — errors caught before code ever reaches production
Integer division (int / int) silently drops decimals — no error, no warning, just wrong data
JDK includes the compiler (javac); JRE is runtime-only — always install the JDK for development

Java
    Java is a statically-typed, object-oriented programming language and a cross-platform runtime environment

    Java is a widely used, object-oriented programming language known for its 'write once, run anywhere' capability. This means Java code compiled on one platform can run on any other platform with a Java Virtual Machine (JVM) installed, without needing recompilation.


Key Features and Applications of Java
    One of Java's core strengths is its object-oriented nature, which simplifies complex software development by organizing code into reusable objects. It boasts automatic memory management (garbage collection), making it less prone to memory leaks compared to languages like C++. 
    
    Java is extensively used in large-scale enterprise systems, backend web development (using frameworks like Spring), Android mobile app development, scientific computing, and embedded systems, showcasing its versatility across different domains.

Java's compiler (javac) uses the filename to locate the class at compile time. If your file is WhatIsJava.java but your class is named HelloWorld, you'll get a compile error: 'class HelloWorld is public, should be declared in a file named HelloWorld.java'. Always keep them in sync 

JVM (Java Virtual Machine) - runs bytecode.
JRE (Java Runtime Environment) - the JVM plus the standard libraries your code needs.
JDK (Java Development Kit) - the JRE plus the compiler (javac) and dev tools.

To write Java, you need the JDK. To just run the Java programs, you only need the JRE. Install the JDK - it includes everything
