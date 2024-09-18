import java.util.ArrayList;
import java.util.Collections;

public class MyArrayList {
    private ArrayList<Person> list;

    public MyArrayList() {
        list = new ArrayList<Person>();
    }

    public void addPerson(Person person) {
        list.add(person);
    }

    public void printElements() {
        for (Person person : list) {
            System.out.println(person);
        }
    }

    public void sortList() {
        Collections.sort(list);
    }

    public static void main(String[] args) {
        MyArrayList myArrayList = new MyArrayList();

        // Adding people
        myArrayList.addPerson(new Person("Alice", 30));
        myArrayList.addPerson(new Person("Bob", 25));
        myArrayList.addPerson(new Person("Charlie", 35));

        // Print list before sorting
        System.out.println("Before sorting:");
        myArrayList.printElements();

        // Sort the list
        myArrayList.sortList();

        // Print sorted list
        System.out.println("After sorting:");
        myArrayList.printElements();
    }
}
