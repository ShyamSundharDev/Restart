
public class CompileAndRunDemo{
    public static void main(String[] args) {
        String operatingSystem = System.getProperty("os.name");
        String jvmVendor = System.getProperty("java.vendor");
        String javaHome = System.getProperty("java.home");

        System.out.println("===== JVM Environment Report ====");

        System.out.println(String.format("Operating System : %s", operatingSystem));
        System.out.println(String.format("Java Vendor   : %s", jvmVendor));
        System.out.println(String.format("Java Home  : %s", javaHome));

        System.out.println("\nSame .class file. Different machine. Same result.");
    }
}