var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  This is a course on the methods of linear algebra and vector calculus that most often occur in optimization problems , i.e. given a quantity depending on multiple parameters, finding those parameters that maximize that quantity. Such methods are fundamental to data science, since in that subject one often constructs models of data by choosing an optimal model (specified by numerous parameters) that best approximates a given set of data. We begin the course by discussing the techniques of linear algebra most relevant to optimization, before discussing the relevant parts of the theory of the calculus of several variables.  "
},
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-vector-geometry",
  "level": "1",
  "url": "sec-vector-geometry.html",
  "type": "Section",
  "number": "1.1",
  "title": "Vector Geometry",
  "body": " Vector Geometry   The Definition of a Vector   Scalars and Vectors   A real quantity is also called a scalar quantity , or scalar . For some positive integer , an -vector is a quantity described by an ordered list of scalars, often written as a comma separated list of numbers surrounded by open parenthesis, i.e. as . Later on in the course we will also encounter vectors written as a row or column of numbers in square brackets, i.e. . The collection of all -vectors is denoted .    It is customary to use bold letters for variables, such as or , to represent vectors. We let denote the vector consisting only of zeroes.    A point in -dimensional space can also be identified with an ordered list of numbers using Cartesian coordinates . We will therefore often blur the distinction between points and vectors in these notes, though we often use the terms in different contexts, i.e. a point refers to a location in space, whereas vectors represent quantities that ‘point’ in a particular direction. Some sources use angled brackets such as to denote vectors, whereas the round brackets are reserved for points. But we will not use this notation in this textbook.      Vectors as Displacements in Space  Vectors are often used to represent physical quantities involving displacement in space. The vector represents the displacement from the origin to the point with coordinates , or more generally, the displacement from a point with coordinates to the point with coordinates .  Because vectors often indicate displacements, they are often drawn pictorially as arrows starting at a point, and ending where that point is displaced by the vector.   A vector represented as an arrow between two points and .   A vector, represented as an arrow between two points.   A vector represented as an arrow between two points and .       Vectors as Displacements in Space   What is the vector representing the displacement from the point to the point .    If was the displacement, then we would have , i.e. so that and . Solving these equations gives and , so that the displacement vector is .     More generally, the displacement vector from a point to a point is the vector . Given two points and , we denote the displacement vector from to by . The point obtained from displacing a point by a vector will be denoted .   Drawing vectors as arrows immediately leads to the notion of the length of a vector, by taking the length of the line segment upon which the arrow is built.   The Length of a Vector   The length of a vector is the quantity .      Verify, using planar geometry, that the length of a -vector is the length of the line-segment of the arrow representing the vector.    Let be an arbitrary -vector. Consider a triangle with vertices , , and (see ).   A triangle with vertices , , and , drawn to determine the length of the line-segment upon which a -vector is based.   A triangle drawn to determine the length of the line-segment upon which a 2-vector is based.   A triangle with vertices , , and , drawn to determine the length of the line-segment upon which a -vector is based.      This triangle is right-angled (the two legs are horizontal and vertical), and the hypotenuse is the line-segment upon which the vector is built. The length of the leg of the triangle from to is , and the length of the line from to is . By Pythagoras' theorem, we conclude that the length of the hypotenuse is .      Adding and Scaling Vectors  Two displacements can be combined just apply one displacement after the other is applied. This naturally leads to the notion of adding two vectors.   Adding Vectors   The sum of two vectors and , denoted , is the vector given by the tuple .      The sum of two vectors can be illustrated pictorially as in by drawing the parallelogram with the vectors placed along two sides of the parallelogram.     The sum of two vectors and .   The sum of two vectors.   The sum of two vectors and .      One can also scale a vector by a given scalar quantity.   Scaling Vectors   If , and is a scalar, we let denote the vector , i.e. multiplying each entry of the vector by .     We will discuss these operations in far more detail in and .     Dot Products of Vectors  The dot product is a simple quantity which provides a simple method of measuring the angles between different vectors.   The Dot Product   The dot product of two -vectors and is the scalar quantity .    Geometrically, the dot product of two vectors is a simply calculated quantity which represents the internal angle between the two vectors and , in a certain fashion. If we draw the two vectors as arrows with the same startpoint, then they form an angle on the plane containing both vectors, and the internal angle is given below.   The Angle Between Vectors   For two vectors , the internal angle between the vectors is the angle satisfying the equation .    The dot product can be thought of as a measure of the similarity between two vectors. Suppose is the internal angle between two vectors and :  If is close to zero, then the two vectors are close to pointing in the same direction (the coordinates are correlated ). Since , this occurs precisely when .  If is close to , then the two vectors are close to pointing in opposite directions (the coordinates are negatively correlated ). Since , this occurs precisely when .  If is close to , the two vectors are close to pointing at right angles, and so are uncorrelated . Since , this occurs precisely when . When , so that , we say the two vectors are perpendicular .  Thus the quantity ranges between and , and measures the degree to which the two vectors and point in the same, or opposite, directions. In some contexts, especially in certain areas of data science, this quantity is called the cosine similarity between the vectors and .    Calculate the internal angle between the two vectors and .    We begin by calculating the lengths of the two vectors, i.e and . Next, we calculate the dot product . If is the internal angle between the two vectors, then . Thus the internal angle between the two vectors is .     The vectors and from , drawn as arrows from the origin.   The two vectors from .   The vectors and from .        Calculate the internal angle between the two vectors .    We calculate that . Thus if is the internal angle between the two vectors, then . Thus .     Note that for any .    We will study the dot product in far more detail in .    "
},
{
  "id": "def-1-0-scalars-and-vectors",
  "level": "2",
  "url": "sec-vector-geometry.html#def-1-0-scalars-and-vectors",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Scalars and Vectors.",
  "body": " Scalars and Vectors   A real quantity is also called a scalar quantity , or scalar . For some positive integer , an -vector is a quantity described by an ordered list of scalars, often written as a comma separated list of numbers surrounded by open parenthesis, i.e. as . Later on in the course we will also encounter vectors written as a row or column of numbers in square brackets, i.e. . The collection of all -vectors is denoted .   "
},
{
  "id": "sec-vector-geometry-2-4",
  "level": "2",
  "url": "sec-vector-geometry.html#sec-vector-geometry-2-4",
  "type": "Remark",
  "number": "1.1.2",
  "title": "",
  "body": "  A point in -dimensional space can also be identified with an ordered list of numbers using Cartesian coordinates . We will therefore often blur the distinction between points and vectors in these notes, though we often use the terms in different contexts, i.e. a point refers to a location in space, whereas vectors represent quantities that ‘point’ in a particular direction. Some sources use angled brackets such as to denote vectors, whereas the round brackets are reserved for points. But we will not use this notation in this textbook.   "
},
{
  "id": "fig-1-1-vector-as-arrow",
  "level": "2",
  "url": "sec-vector-geometry.html#fig-1-1-vector-as-arrow",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " A vector represented as an arrow between two points and .   A vector, represented as an arrow between two points.   A vector represented as an arrow between two points and .     "
},
{
  "id": "sec-vector-geometry-3-5",
  "level": "2",
  "url": "sec-vector-geometry.html#sec-vector-geometry-3-5",
  "type": "Activity",
  "number": "1.1.1",
  "title": "Vectors as Displacements in Space.",
  "body": " Vectors as Displacements in Space   What is the vector representing the displacement from the point to the point .    If was the displacement, then we would have , i.e. so that and . Solving these equations gives and , so that the displacement vector is .   "
},
{
  "id": "sec-vector-geometry-3-6",
  "level": "2",
  "url": "sec-vector-geometry.html#sec-vector-geometry-3-6",
  "type": "Remark",
  "number": "1.1.4",
  "title": "",
  "body": " More generally, the displacement vector from a point to a point is the vector . Given two points and , we denote the displacement vector from to by . The point obtained from displacing a point by a vector will be denoted .  "
},
{
  "id": "def-1-1-vector-length",
  "level": "2",
  "url": "sec-vector-geometry.html#def-1-1-vector-length",
  "type": "Definition",
  "number": "1.1.5",
  "title": "The Length of a Vector.",
  "body": " The Length of a Vector   The length of a vector is the quantity .   "
},
{
  "id": "sec-vector-geometry-3-9",
  "level": "2",
  "url": "sec-vector-geometry.html#sec-vector-geometry-3-9",
  "type": "Activity",
  "number": "1.1.2",
  "title": "",
  "body": "  Verify, using planar geometry, that the length of a -vector is the length of the line-segment of the arrow representing the vector.    Let be an arbitrary -vector. Consider a triangle with vertices , , and (see ).   A triangle with vertices , , and , drawn to determine the length of the line-segment upon which a -vector is based.   A triangle drawn to determine the length of the line-segment upon which a 2-vector is based.   A triangle with vertices , , and , drawn to determine the length of the line-segment upon which a -vector is based.      This triangle is right-angled (the two legs are horizontal and vertical), and the hypotenuse is the line-segment upon which the vector is built. The length of the leg of the triangle from to is , and the length of the line from to is . By Pythagoras' theorem, we conclude that the length of the hypotenuse is .   "
},
{
  "id": "def-1-1-adding-vectors",
  "level": "2",
  "url": "sec-vector-geometry.html#def-1-1-adding-vectors",
  "type": "Definition",
  "number": "1.1.7",
  "title": "Adding Vectors.",
  "body": " Adding Vectors   The sum of two vectors and , denoted , is the vector given by the tuple .   "
},
{
  "id": "sec-vector-geometry-4-4",
  "level": "2",
  "url": "sec-vector-geometry.html#sec-vector-geometry-4-4",
  "type": "Remark",
  "number": "1.1.8",
  "title": "",
  "body": "  The sum of two vectors can be illustrated pictorially as in by drawing the parallelogram with the vectors placed along two sides of the parallelogram.   "
},
{
  "id": "fig-1-1-adding-vectors",
  "level": "2",
  "url": "sec-vector-geometry.html#fig-1-1-adding-vectors",
  "type": "Figure",
  "number": "1.1.9",
  "title": "",
  "body": " The sum of two vectors and .   The sum of two vectors.   The sum of two vectors and .     "
},
{
  "id": "def-1-1-scaling",
  "level": "2",
  "url": "sec-vector-geometry.html#def-1-1-scaling",
  "type": "Definition",
  "number": "1.1.10",
  "title": "Scaling Vectors.",
  "body": " Scaling Vectors   If , and is a scalar, we let denote the vector , i.e. multiplying each entry of the vector by .   "
},
{
  "id": "sec-vector-geometry-4-8",
  "level": "2",
  "url": "sec-vector-geometry.html#sec-vector-geometry-4-8",
  "type": "Remark",
  "number": "1.1.11",
  "title": "",
  "body": " We will discuss these operations in far more detail in and .  "
},
{
  "id": "def-1-1-dot-product",
  "level": "2",
  "url": "sec-vector-geometry.html#def-1-1-dot-product",
  "type": "Definition",
  "number": "1.1.12",
  "title": "The Dot Product.",
  "body": " The Dot Product   The dot product of two -vectors and is the scalar quantity .   "
},
{
  "id": "sec-vector-geometry-5-5",
  "level": "2",
  "url": "sec-vector-geometry.html#sec-vector-geometry-5-5",
  "type": "Theorem",
  "number": "1.1.13",
  "title": "The Angle Between Vectors.",
  "body": " The Angle Between Vectors   For two vectors , the internal angle between the vectors is the angle satisfying the equation .   "
},
{
  "id": "sec-vector-geometry-5-6",
  "level": "2",
  "url": "sec-vector-geometry.html#sec-vector-geometry-5-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "correlated negatively correlated uncorrelated perpendicular cosine similarity "
},
{
  "id": "act-1-1-internal-angle-act-1",
  "level": "2",
  "url": "sec-vector-geometry.html#act-1-1-internal-angle-act-1",
  "type": "Activity",
  "number": "1.1.3",
  "title": "",
  "body": "  Calculate the internal angle between the two vectors and .    We begin by calculating the lengths of the two vectors, i.e and . Next, we calculate the dot product . If is the internal angle between the two vectors, then . Thus the internal angle between the two vectors is .   "
},
{
  "id": "fig-dot-product-angle-example",
  "level": "2",
  "url": "sec-vector-geometry.html#fig-dot-product-angle-example",
  "type": "Figure",
  "number": "1.1.14",
  "title": "",
  "body": " The vectors and from , drawn as arrows from the origin.   The two vectors from .   The vectors and from .     "
},
{
  "id": "sec-vector-geometry-5-9",
  "level": "2",
  "url": "sec-vector-geometry.html#sec-vector-geometry-5-9",
  "type": "Activity",
  "number": "1.1.4",
  "title": "",
  "body": "  Calculate the internal angle between the two vectors .    We calculate that . Thus if is the internal angle between the two vectors, then . Thus .   "
},
{
  "id": "rem-1-1-length-as-dot-product",
  "level": "2",
  "url": "sec-vector-geometry.html#rem-1-1-length-as-dot-product",
  "type": "Remark",
  "number": "1.1.15",
  "title": "",
  "body": " Note that for any .  "
},
{
  "id": "sec-vector-geometry-5-11",
  "level": "2",
  "url": "sec-vector-geometry.html#sec-vector-geometry-5-11",
  "type": "Remark",
  "number": "1.1.16",
  "title": "",
  "body": " We will study the dot product in far more detail in .  "
},
{
  "id": "sec-equations-of-lines-and-planes",
  "level": "1",
  "url": "sec-equations-of-lines-and-planes.html",
  "type": "Section",
  "number": "1.2",
  "title": "Equations of Lines and Planes",
  "body": " Equations of Lines and Planes   Recall that a line in the plane which passes through a point , and has slope , can be written in point slope form , as a set of points which solve the equation . In this chapter, we use some of the vector geometry we have introduced in the previous section to obtain equations, whose solutions give lines and planes in three dimensional space.    Equations of Planes in Space  To obtain an equation which describes a plane in three dimensional space, we take a different approach to the point-slope form equation for lines in two dimensional space. Instead of defining the equation in terms of the direction in which the plane travels, we instead describe the plane in terms of the one direction in which the plane does not travel , i.e. the direction at a right angle to the plane. We call this direction the normal vector of the plane.   The Normal Vector Equation For Planes   Consider a vector . Then for any point in three-dimensional space, we can consider the plane through , with normal vector , to be the set of all points such that the vector is perpendicular to , i.e. . This vector equation can be expanded into an equation involving scalars. If we write , , and , then the equation describing the plane can be writen as .     A plane passing through a point with normal vector .   A plane passing through a point with a given normal vector   A plane passing through a point with normal vector .        Find the equation of the plane passing through the point , normal to the vector .    The equation describing the plane is , which we can expand as , and simplify to .      Equations of Lines in Space  In three dimensional space, and higher, it is more difficult to describe lines, simply because shapes in three-dimensional space described as the zeroes of a single equation are in most cases two-dimensional , and so lines must be described as points which satisfy two different equations. One can obtain such an equation in various ways. If a line in three-dimensional space is equal to the intersection of two planes passing through a point (see ), with normal vectors and . Then the line is precisely the set of points which satisfy the two equations and .   A line defined as the intersection of two planes, with normal vectors and , passing through a common point .   A line defined as the intersection of two planes passing through a common point.   A line defined as the intersection of two planes, with normal vectors and , passing through a common point .      However, what makes this strategy somewhat tricky is that for any line, there are many different pairs of planes one can choose that intersect on a given line. In most cases, it is instead far more natural to define lines in three-dimensional space parametrically .   The Parametric Equation For a Line   Consider a -vector and a point in three-dimensional space. Then the line through a point with direction vector  is equal to the set of all points of the form . We can also write the line symmetrically as the set of points such that . All three values in this equation are equal to the scalar which occurs in the first equations.     A line defined by a direction vector and a point .   A line defined by a direction vector and a point.   A line defined by a direction vector and a point .        Find a parametric equation for the line passing through the two points and .    We may choose to be equal to . If we let , then the parametric equation is . If we let , then we obtain a different parameterization, namely . Both parameterizations define the same line. The symmetric equation for the line is       We now study a more algebraic problem; solving systems of linear equations. Nonetheless, in Chapter this will lead us back to the study of vectors, since we will soon learn that the algebraic properties of vectors makes them useful in many more situations than those occuring directly in geometry.   "
},
{
  "id": "sec-equations-of-lines-and-planes-3-2",
  "level": "2",
  "url": "sec-equations-of-lines-and-planes.html#sec-equations-of-lines-and-planes-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal vector "
},
{
  "id": "def-1-2-normal-vector-equation",
  "level": "2",
  "url": "sec-equations-of-lines-and-planes.html#def-1-2-normal-vector-equation",
  "type": "Definition",
  "number": "1.2.1",
  "title": "The Normal Vector Equation For Planes.",
  "body": " The Normal Vector Equation For Planes   Consider a vector . Then for any point in three-dimensional space, we can consider the plane through , with normal vector , to be the set of all points such that the vector is perpendicular to , i.e. . This vector equation can be expanded into an equation involving scalars. If we write , , and , then the equation describing the plane can be writen as .   "
},
{
  "id": "fig-1-2-normal-vector-toplane",
  "level": "2",
  "url": "sec-equations-of-lines-and-planes.html#fig-1-2-normal-vector-toplane",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " A plane passing through a point with normal vector .   A plane passing through a point with a given normal vector   A plane passing through a point with normal vector .     "
},
{
  "id": "sec-equations-of-lines-and-planes-3-5",
  "level": "2",
  "url": "sec-equations-of-lines-and-planes.html#sec-equations-of-lines-and-planes-3-5",
  "type": "Activity",
  "number": "1.2.1",
  "title": "",
  "body": "  Find the equation of the plane passing through the point , normal to the vector .    The equation describing the plane is , which we can expand as , and simplify to .   "
},
{
  "id": "fig-1-2-intersection-of-two-planes",
  "level": "2",
  "url": "sec-equations-of-lines-and-planes.html#fig-1-2-intersection-of-two-planes",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " A line defined as the intersection of two planes, with normal vectors and , passing through a common point .   A line defined as the intersection of two planes passing through a common point.   A line defined as the intersection of two planes, with normal vectors and , passing through a common point .     "
},
{
  "id": "def-1-2-parametric-equation-for-line",
  "level": "2",
  "url": "sec-equations-of-lines-and-planes.html#def-1-2-parametric-equation-for-line",
  "type": "Definition",
  "number": "1.2.4",
  "title": "The Parametric Equation For a Line.",
  "body": " The Parametric Equation For a Line   Consider a -vector and a point in three-dimensional space. Then the line through a point with direction vector  is equal to the set of all points of the form . We can also write the line symmetrically as the set of points such that . All three values in this equation are equal to the scalar which occurs in the first equations.   "
},
{
  "id": "fig-1-2-parametric-line",
  "level": "2",
  "url": "sec-equations-of-lines-and-planes.html#fig-1-2-parametric-line",
  "type": "Figure",
  "number": "1.2.5",
  "title": "",
  "body": " A line defined by a direction vector and a point .   A line defined by a direction vector and a point.   A line defined by a direction vector and a point .     "
},
{
  "id": "sec-equations-of-lines-and-planes-4-7",
  "level": "2",
  "url": "sec-equations-of-lines-and-planes.html#sec-equations-of-lines-and-planes-4-7",
  "type": "Activity",
  "number": "1.2.2",
  "title": "",
  "body": "  Find a parametric equation for the line passing through the two points and .    We may choose to be equal to . If we let , then the parametric equation is . If we let , then we obtain a different parameterization, namely . Both parameterizations define the same line. The symmetric equation for the line is    "
},
{
  "id": "sec-solutions-elementary-operations",
  "level": "1",
  "url": "sec-solutions-elementary-operations.html",
  "type": "Section",
  "number": "1.3",
  "title": "Solutions of Systems of Linear Equations and Elementary Operations",
  "body": " Solutions of Systems of Linear Equations and Elementary Operations   Forest Animals   In a Wisconsin forest, there are robins and badgers. Together they have heads and legs. How many robins and badgers are in the forest?    Let be the number of robins, and the number of badgers.     Heads     Legs      Rearranging the first equation, we find . Substituting this into the second equation:     Since and , .  So there are robins in the forest, and badgers in the forest.     Linear Equations   An equation of the form where are scalars, and are variables is called a linear equation . The real quantities are called constants , while the variables are called unknowns .     Identifying Constants and Unknowns   Identify the constants and unknowns in each linear equation in , i.e. the two linear equations and .     Table of constants and unknowns.    Equation  Constants  Unknowns                  Non-Linear Equations   What are some equations that are not linear equations?    Here are four examples:  is non-linear because of the squared term .  is non-linear because of the product of variables .  is non-linear because of the sine function .  is non-linear because of the square root .       Systems of Linear Equations   A system of linear equations or linear system is a set of linear equations each in unknowns. A linear system has the form where and are constants.  A solution to the linear system is a sequence of numbers so that each equation in is satisfied when the substitutions , are made.   If a linear system has no solution, it is called inconsistent .    If a linear system has at least one solution, it is called consistent . Note that an equation with infinitely many solutions is still consistent!   If two linear systems have exactly the same solutions, they are called equivalent .     Homogeneous Systems   If a linear system is of the form it is called a homogeneous system .    Note that is always a solution to a homogeneous system. It is called the trivial solution.    A solution to a homogeneous system where not all are is called a nontrivial solution.        In 3D space, lines and planes can be specified as solutions to a given system of linear equations, and so give examples of systems of linear equations with infinitely many solutions. When two distinct planes are parallel, i.e., when their normal vector is parallel, the intersection is empty — put differently, no solutions exist to the system of equations formed by collecting the equations that define each plane.    Another Forest Problem S  In another Wisconsin forest, there are also robins and badgers. Together they have heads, eyes, and legs. How many robins and badgers are in the forest? Can we use any new terminology to describe the resulting system of linear equations that we use to determine the number of robins and badgers?    Let be the number of robins, and the number of badgers:   Heads     Eyes     Legs      Note that the second equation gives (after dividing each side by 2), which is the same as the first equation.  From the first equation: .  Substitute this into the third equation:   Since and , .  So there are 8 robins and 10 badgers in the forest. The system of three linear equations in two unknowns that we have solved in this problem is consistent .     Forest Analysis   In a third Wisconsin forest, there are deer and badgers. Together they have heads and legs. How many deer and badgers are in the forest? Can we use any new terminology to describe this system?    Let be the number of deer, and the number of badgers.   Heads     Legs      From second equation:   This system is inconsistent, since the first equation gives but the second gives (Try substituting the first equation into the second one).    We will build a method of efficiently solving a large system of linear equations by applying one of several elementary operations to the system, which do not change the solutions to the system, with the hope of eventually simplifying the system to one in which the set of solutions is obvious.   Elementary Operations   The following operations, called elementary operations , can be performed on systems of linear equations, and produce equivalent systems.  Interchanging the th and th equations.  Multiplying an equation by a nonzero constant.  Replacing the th equation by times the th equation plus the th equation, for some real quantity .      We can track these operations more easily using an array\/matrix to record the coefficients.   Matrices Corresponding To Linear Equations   The coefficient matrix of a linear system of the form is the matrix   The constant matrix , also called the constant vector or constant column vector is   We can adjoin to matrix to create the augmented matrix representing our linear system:         Elementary Operations with Matrices   Consider the linear system This system is reduced to a simpler system using elementary operations. Find the augmented matrix for the linear systems, and describe the operation that is performed to obtain this matrix from the previous one.    The initial system and augmented matrix is          Interchange rows and :          Divide first row by :          Replace row by row :          Replace row by row :          Multiply row by :          Replace row by :          Replace row by :            Notice that when we apply elementary operations to a system of linear equations, the corresponding rows of their corresponding matrices also change is an analogous way.   Elementary Row Operations   An elementary row operation on a matrix is any one of the following operations:  Type I: Interchanging any two rows.  Type II: Multiplying a row by a nonzero number.  Type III: Adding a multiple of one row to another.       The Geometric Point of View - Explore On Your Own!   Consider the following three systems, inspired by our forest examples. Graph the lines defined by these equations and check how this reflects the number of solutions in each case.    System 1      System 2     System 3     "
},
{
  "id": "ex-1-1-forest-animals-1",
  "level": "2",
  "url": "sec-solutions-elementary-operations.html#ex-1-1-forest-animals-1",
  "type": "Activity",
  "number": "1.3.1",
  "title": "Forest Animals.",
  "body": " Forest Animals   In a Wisconsin forest, there are robins and badgers. Together they have heads and legs. How many robins and badgers are in the forest?    Let be the number of robins, and the number of badgers.     Heads     Legs      Rearranging the first equation, we find . Substituting this into the second equation:     Since and , .  So there are robins in the forest, and badgers in the forest.   "
},
{
  "id": "sec-solutions-elementary-operations-3",
  "level": "2",
  "url": "sec-solutions-elementary-operations.html#sec-solutions-elementary-operations-3",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Linear Equations.",
  "body": " Linear Equations   An equation of the form where are scalars, and are variables is called a linear equation . The real quantities are called constants , while the variables are called unknowns .   "
},
{
  "id": "sec-solutions-elementary-operations-4",
  "level": "2",
  "url": "sec-solutions-elementary-operations.html#sec-solutions-elementary-operations-4",
  "type": "Activity",
  "number": "1.3.2",
  "title": "Identifying Constants and Unknowns.",
  "body": " Identifying Constants and Unknowns   Identify the constants and unknowns in each linear equation in , i.e. the two linear equations and .     Table of constants and unknowns.    Equation  Constants  Unknowns                "
},
{
  "id": "sec-solutions-elementary-operations-5",
  "level": "2",
  "url": "sec-solutions-elementary-operations.html#sec-solutions-elementary-operations-5",
  "type": "Activity",
  "number": "1.3.3",
  "title": "Non-Linear Equations.",
  "body": " Non-Linear Equations   What are some equations that are not linear equations?    Here are four examples:  is non-linear because of the squared term .  is non-linear because of the product of variables .  is non-linear because of the sine function .  is non-linear because of the square root .     "
},
{
  "id": "def-properties-of-linear-systems",
  "level": "2",
  "url": "sec-solutions-elementary-operations.html#def-properties-of-linear-systems",
  "type": "Definition",
  "number": "1.3.3",
  "title": "Systems of Linear Equations.",
  "body": " Systems of Linear Equations   A system of linear equations or linear system is a set of linear equations each in unknowns. A linear system has the form where and are constants.  A solution to the linear system is a sequence of numbers so that each equation in is satisfied when the substitutions , are made.   If a linear system has no solution, it is called inconsistent .    If a linear system has at least one solution, it is called consistent . Note that an equation with infinitely many solutions is still consistent!   If two linear systems have exactly the same solutions, they are called equivalent .   "
},
{
  "id": "sec-solutions-elementary-operations-7",
  "level": "2",
  "url": "sec-solutions-elementary-operations.html#sec-solutions-elementary-operations-7",
  "type": "Definition",
  "number": "1.3.4",
  "title": "Homogeneous Systems.",
  "body": " Homogeneous Systems   If a linear system is of the form it is called a homogeneous system .    Note that is always a solution to a homogeneous system. It is called the trivial solution.    A solution to a homogeneous system where not all are is called a nontrivial solution.     "
},
{
  "id": "sec-solutions-elementary-operations-8",
  "level": "2",
  "url": "sec-solutions-elementary-operations.html#sec-solutions-elementary-operations-8",
  "type": "Note",
  "number": "1.3.5",
  "title": "",
  "body": " In 3D space, lines and planes can be specified as solutions to a given system of linear equations, and so give examples of systems of linear equations with infinitely many solutions. When two distinct planes are parallel, i.e., when their normal vector is parallel, the intersection is empty — put differently, no solutions exist to the system of equations formed by collecting the equations that define each plane.  "
},
{
  "id": "ex-1-1-forest-animals-2",
  "level": "2",
  "url": "sec-solutions-elementary-operations.html#ex-1-1-forest-animals-2",
  "type": "Activity",
  "number": "1.3.4",
  "title": "Another Forest Problem.",
  "body": " Another Forest Problem S  In another Wisconsin forest, there are also robins and badgers. Together they have heads, eyes, and legs. How many robins and badgers are in the forest? Can we use any new terminology to describe the resulting system of linear equations that we use to determine the number of robins and badgers?    Let be the number of robins, and the number of badgers:   Heads     Eyes     Legs      Note that the second equation gives (after dividing each side by 2), which is the same as the first equation.  From the first equation: .  Substitute this into the third equation:   Since and , .  So there are 8 robins and 10 badgers in the forest. The system of three linear equations in two unknowns that we have solved in this problem is consistent .   "
},
{
  "id": "ex-1-1-forest-animals-3",
  "level": "2",
  "url": "sec-solutions-elementary-operations.html#ex-1-1-forest-animals-3",
  "type": "Activity",
  "number": "1.3.5",
  "title": "Forest Analysis.",
  "body": " Forest Analysis   In a third Wisconsin forest, there are deer and badgers. Together they have heads and legs. How many deer and badgers are in the forest? Can we use any new terminology to describe this system?    Let be the number of deer, and the number of badgers.   Heads     Legs      From second equation:   This system is inconsistent, since the first equation gives but the second gives (Try substituting the first equation into the second one).   "
},
{
  "id": "thm-elementary-operations",
  "level": "2",
  "url": "sec-solutions-elementary-operations.html#thm-elementary-operations",
  "type": "Definition",
  "number": "1.3.6",
  "title": "Elementary Operations.",
  "body": " Elementary Operations   The following operations, called elementary operations , can be performed on systems of linear equations, and produce equivalent systems.  Interchanging the th and th equations.  Multiplying an equation by a nonzero constant.  Replacing the th equation by times the th equation plus the th equation, for some real quantity .     "
},
{
  "id": "def-1-1-coefficient-matrices",
  "level": "2",
  "url": "sec-solutions-elementary-operations.html#def-1-1-coefficient-matrices",
  "type": "Definition",
  "number": "1.3.7",
  "title": "Matrices Corresponding To Linear Equations.",
  "body": " Matrices Corresponding To Linear Equations   The coefficient matrix of a linear system of the form is the matrix   The constant matrix , also called the constant vector or constant column vector is   We can adjoin to matrix to create the augmented matrix representing our linear system:       "
},
{
  "id": "sec-solutions-elementary-operations-15",
  "level": "2",
  "url": "sec-solutions-elementary-operations.html#sec-solutions-elementary-operations-15",
  "type": "Activity",
  "number": "1.3.6",
  "title": "Elementary Operations with Matrices.",
  "body": " Elementary Operations with Matrices   Consider the linear system This system is reduced to a simpler system using elementary operations. Find the augmented matrix for the linear systems, and describe the operation that is performed to obtain this matrix from the previous one.    The initial system and augmented matrix is          Interchange rows and :          Divide first row by :          Replace row by row :          Replace row by row :          Multiply row by :          Replace row by :          Replace row by :           "
},
{
  "id": "sec-solutions-elementary-operations-17",
  "level": "2",
  "url": "sec-solutions-elementary-operations.html#sec-solutions-elementary-operations-17",
  "type": "Definition",
  "number": "1.3.8",
  "title": "Elementary Row Operations.",
  "body": " Elementary Row Operations   An elementary row operation on a matrix is any one of the following operations:  Type I: Interchanging any two rows.  Type II: Multiplying a row by a nonzero number.  Type III: Adding a multiple of one row to another.     "
},
{
  "id": "sec-solutions-elementary-operations-18",
  "level": "2",
  "url": "sec-solutions-elementary-operations.html#sec-solutions-elementary-operations-18",
  "type": "Activity",
  "number": "1.3.7",
  "title": "The Geometric Point of View - Explore On Your Own!",
  "body": " The Geometric Point of View - Explore On Your Own!   Consider the following three systems, inspired by our forest examples. Graph the lines defined by these equations and check how this reflects the number of solutions in each case.    System 1      System 2     System 3    "
},
{
  "id": "sec-gaussian-elimination",
  "level": "1",
  "url": "sec-gaussian-elimination.html",
  "type": "Section",
  "number": "1.4",
  "title": "Gaussian Elimination",
  "body": " Gaussian Elimination   Solving Systems Using Back Substitution   The following are augmented matrices (see ) representing systems of linear equations in three unknowns , , and . Write the equations corresponding to each system of equations, then solve the systems.        Rewrite as:     Substitute into the second equation:     Substitute and into the first equation:     Solution: , , and .        Rewrite as:   Solution: , , .     Row and Reduced Row Echelon Form   An matrix is in row echelon form (REF) if it satisfies the following properties:  All zero rows , if there are any, appear at the bottom of the matrix.  The leftmost nonzero entry in any nonzero row is a 1. This entry is called the leading one of its row.  For each nonzero row, the leading one appears to the right and below any leading ones in preceding rows.    We say is in reduced row echelon form (RREF) if is in REF and also satisfies:  all columns containing leading ones contain no other non-zero entries.      A matrix in row echelon form appears as a staircase (or echelon ) pattern of leading ones descending from the upper left corner of the matrix. gives a schematic of a matrix in row echelon form, where the asterisks denote arbitrary constants.   A schematic of a matrix in row echelon form. Adapted from Vretta-Lyryx .   A schematic of a matrix in row echelon form.   A schematic describing the properties of a matrix in row echelon form. A line is drawn from the leading ones of each row of the matrix, forming a staircase with steps of irregular size.       Identifying REF and RREF Matrices   For each of the following matrices, determine whether it is in row echelon form, reduced row echelon form, both, or neither.        Both REF and RREF (staircase pattern, 0s in columns with leading ones).        Not REF (zero row is not a bottom row).        REF but not RREF (has nonzero entries above leading ones).        Both REF and RREF (has zeros above and below leading ones).        Not REF (third row has a leading one in same column as second row).     Pivot Entries   For a matrix in REF, the location of each leading one is called a pivot . The columns containing pivots are called pivot columns .     Row Equivalence   An matrix is row equivalent to an matrix if can be produced by applying a finite sequence of elementary row operations to .      Every matrix is row equivalent to a unique matrix in RREF.    The Gaussian Algorithm gives a procedure to find a row-echelon matrix which is row equivalent to any given matrix. The Heuristic is to move from top to bottom and outside in until you obtain a matrix in row-echelon form.   The Gaussian Elimination Algorithm   Given a matrix, this algorithm will compute a matrix in row echelon form which is row-equivalent to the original matrix.    If the matrix consists entirely of zeros, stop — it is already in row-echelon form.  Otherwise, find the left-most column containing a nonzero entry , and move the row containing that entry to the top position.  Now multiply the new top row by so that the row has a leading one.  By subtracting multiples of that row from rows below it, make each entry below this leading one equal to zero.    This completes the first row. Now Repeat Steps 1-4 on the matrix consisting of all other rows. The process stops when either no rows remain, or the remaining rows consist entirely of zeros.     Finding Row Echelon Forms   Find a row echelon form of the given matrix .     First nonzero column is column 1. Interchange rows 1 and 2:   Multiply first row by :   Subtract 2 times first row from Row 3:   Interchange rows 2 and 3:   The matrix is now in REF with leading ones in columns 1, 2, and 3.      Consider two linear systems each of equations in unknowns. If the augmented matrices and are row equivalent , then the linear systems are equivalent , i.e. the systems have the same solutions.    Since we can solve systems of linear equations whose augmented matrices are in row echelon form using back substitution as in , gives a practical method of solving any system of linear equations.   Solving a Linear System Using Row Echelon Form   Solve the linear system by using to find a matrix in row echelon form which is row equivalent to the augmented matrix .    Augmented matrix: Subtract 2 times Row 1 from Row 2 and subtract 3 times Row 1 from Row 3: Multiply Row 2 by : Add 6 times Row 2 to Row 3: Multiply Row 3 by : This matrix is the augmented of the system of linear equations By , we know that this system is equivalent to the original system of equations specified by the problem. We now apply back substitution to solve the system:   Solving for  Row 3 tells us .   Solving for  Row 2 gives , and since , we calculate that .   Solving for  Row 1 gives , and since and , we calculate that .  So the unique solution is given by , ,       In , the coefficient matrix of is row equivalent to the identity matrix , i.e. the matrix When this happens, the system corresponding to has a unique solution.     Echelon Forms for Linear Systems of Equations   If the augmented matrix of a linear system is a matrix in row echelon form, we say the linear system is in echelon form . The variables corresponding to columns with leading entries are called leading variables (or basic variables ), while the other variables are called free variables .    Back substitution allows us to write a general solution to a linear system by writing the basic variables in terms of the free variables.   Solving a System in REF   Let be the augmented matrix of a linear system. Solve the system.    The matrix is already in row echelon form, and so we need only back substitute to solve the basic variables. Let be the variables. Then the linear system with the corresponding augment matrix is given by The variables , , , and are the basic variables, and is a free variable.  Write the free variable as a parameter , i.e. write . The last row states that , which, given that , can be rearranged to read that . The third row states that . Substituting and into this equation and rearranging, we find that The second row states that . Substituting , , and into this equation, and rearranging, we find that Finally, the first row says that . Substituting , , , and into this equation and rearranging, we find that We now have our solution. All solutions to the linear equation can be written as , , , , and , where is any real number.     Analyzing an Inconsistent System   Consider a linear system with augmented matrix . Solve the system.    Let and be the variables of the linear system. Then the last row corresponds to the equation which occurs in the linear system. This equation is impossible to satisfy, since the left hand side is always equal to zero, whereas the right hand side is not zero. Therefore there are no solutions to this system The system is inconsistent (see ).     The Gaussian Elimination Algorithm  Solving a linear system using Gaussian Elimination:  Convert your linear system to an augmented matrix .  Use to obtain a matrix in row echelon form which is row equivalent to . By the linear systems corresponding to the two augmented matrices are equivalent.  If a leading one appears in the last column of , the system is inconsistent.  Otherwise, assign the free variables as parameters, and use the equations in the row echelon form to solve for the leading variables in terms of the parameters.     Row echelon matrices are not unique for a given starting matrix. For example,          are row equivalent row echelon matrices, but they are not equal. However, the number of leading ones will be the same in each row equivalent row echelon matrices.   The Rank of a Matrix   The rank of a matrix is the number of leading ones (i.e. the number of pivots) in any row echelon form that is row equivalent to .     Finding the Rank of a Matrix   Find the rank of     We convert the matrix to row echelon form using . Subtract 2 times Row 1 from Row 3:   Add Row 2 to Row 3:   The matrix is now in REF with 2 leading ones, and so the rank of is .     Finding the Rank of a Matrix (Continued)   Find the rank of     Subtract 2 times Row 1 from Row 3:   Subtract Row 2 from Row 3:   Multiply Row 3 by :   Matrix is now in REF with 3 leading ones, and so the rank of is .      Suppose a system of equations in variables is consistent (see ), and the rank of the augmented matrix is . Then   The set of solutions is specified in exactly parameters.  If , the system has infinitely many solutions.  If , the system has a unique solution.     Using Theorem and noting when a linear system has no solutions, we have a method for finding the number of solutions to any given linear system.   The Number of Solutions to a Linear System  Any system of linear equations can be divided into one of three categories based on the number of solutions it has:   No solution. This occurs when the augmented matrix of the system has a row echelon form has a row with a leading one in the last column, i.e. when the row appears.    A unique solution. This occurs when every variable in the system is a leading variable, i.e. a pivot occurs in all but the last column of the matrix.    Infinitely many solutions. This occurs when the system is consistent and there is at least one free variable.       Analyzing Solution Sets Using Rank   If represents the augmented matrix for a system of 3 equations and 3 variables, what can we say about the solutions sets of the system?    We apply the Gaussian elimination algorithm:                    The system is consistent. There are two pivot columns, meaning one free variable. The system has infinitely many solutions, parameterized by the free variable.     Analyzing Solution Sets Using Rank (Continued)   If represents the augmented matrix for a system of 3 equations and 3 variables, what can we say about the solutions sets of the system?    We start by applying Gaussian elimination to convert the matrix to row echelon form:                            The last row has a leading one in the last column, so the system is inconsistent; there are no solutions to the system of linear equations.    "
},
{
  "id": "act-back-substitution",
  "level": "2",
  "url": "sec-gaussian-elimination.html#act-back-substitution",
  "type": "Activity",
  "number": "1.4.1",
  "title": "Solving Systems Using Back Substitution.",
  "body": " Solving Systems Using Back Substitution   The following are augmented matrices (see ) representing systems of linear equations in three unknowns , , and . Write the equations corresponding to each system of equations, then solve the systems.        Rewrite as:     Substitute into the second equation:     Substitute and into the first equation:     Solution: , , and .        Rewrite as:   Solution: , , .   "
},
{
  "id": "def-1-2-row-echelon-form",
  "level": "2",
  "url": "sec-gaussian-elimination.html#def-1-2-row-echelon-form",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Row and Reduced Row Echelon Form.",
  "body": " Row and Reduced Row Echelon Form   An matrix is in row echelon form (REF) if it satisfies the following properties:  All zero rows , if there are any, appear at the bottom of the matrix.  The leftmost nonzero entry in any nonzero row is a 1. This entry is called the leading one of its row.  For each nonzero row, the leading one appears to the right and below any leading ones in preceding rows.    We say is in reduced row echelon form (RREF) if is in REF and also satisfies:  all columns containing leading ones contain no other non-zero entries.     "
},
{
  "id": "fig-staircase",
  "level": "2",
  "url": "sec-gaussian-elimination.html#fig-staircase",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": " A schematic of a matrix in row echelon form. Adapted from Vretta-Lyryx .   A schematic of a matrix in row echelon form.   A schematic describing the properties of a matrix in row echelon form. A line is drawn from the leading ones of each row of the matrix, forming a staircase with steps of irregular size.     "
},
{
  "id": "sec-gaussian-elimination-6",
  "level": "2",
  "url": "sec-gaussian-elimination.html#sec-gaussian-elimination-6",
  "type": "Activity",
  "number": "1.4.2",
  "title": "Identifying REF and RREF Matrices.",
  "body": " Identifying REF and RREF Matrices   For each of the following matrices, determine whether it is in row echelon form, reduced row echelon form, both, or neither.        Both REF and RREF (staircase pattern, 0s in columns with leading ones).        Not REF (zero row is not a bottom row).        REF but not RREF (has nonzero entries above leading ones).        Both REF and RREF (has zeros above and below leading ones).        Not REF (third row has a leading one in same column as second row).   "
},
{
  "id": "sec-gaussian-elimination-7",
  "level": "2",
  "url": "sec-gaussian-elimination.html#sec-gaussian-elimination-7",
  "type": "Definition",
  "number": "1.4.3",
  "title": "Pivot Entries.",
  "body": " Pivot Entries   For a matrix in REF, the location of each leading one is called a pivot . The columns containing pivots are called pivot columns .   "
},
{
  "id": "sec-gaussian-elimination-8",
  "level": "2",
  "url": "sec-gaussian-elimination.html#sec-gaussian-elimination-8",
  "type": "Definition",
  "number": "1.4.4",
  "title": "Row Equivalence.",
  "body": " Row Equivalence   An matrix is row equivalent to an matrix if can be produced by applying a finite sequence of elementary row operations to .   "
},
{
  "id": "thm-unique-rref",
  "level": "2",
  "url": "sec-gaussian-elimination.html#thm-unique-rref",
  "type": "Theorem",
  "number": "1.4.5",
  "title": "",
  "body": "  Every matrix is row equivalent to a unique matrix in RREF.   "
},
{
  "id": "alg-gaussian-elimination",
  "level": "2",
  "url": "sec-gaussian-elimination.html#alg-gaussian-elimination",
  "type": "Algorithm",
  "number": "1.4.6",
  "title": "The Gaussian Elimination Algorithm.",
  "body": " The Gaussian Elimination Algorithm   Given a matrix, this algorithm will compute a matrix in row echelon form which is row-equivalent to the original matrix.    If the matrix consists entirely of zeros, stop — it is already in row-echelon form.  Otherwise, find the left-most column containing a nonzero entry , and move the row containing that entry to the top position.  Now multiply the new top row by so that the row has a leading one.  By subtracting multiples of that row from rows below it, make each entry below this leading one equal to zero.    This completes the first row. Now Repeat Steps 1-4 on the matrix consisting of all other rows. The process stops when either no rows remain, or the remaining rows consist entirely of zeros.   "
},
{
  "id": "sec-gaussian-elimination-12",
  "level": "2",
  "url": "sec-gaussian-elimination.html#sec-gaussian-elimination-12",
  "type": "Activity",
  "number": "1.4.3",
  "title": "Finding Row Echelon Forms.",
  "body": " Finding Row Echelon Forms   Find a row echelon form of the given matrix .     First nonzero column is column 1. Interchange rows 1 and 2:   Multiply first row by :   Subtract 2 times first row from Row 3:   Interchange rows 2 and 3:   The matrix is now in REF with leading ones in columns 1, 2, and 3.   "
},
{
  "id": "thm-equivalent-row-ops",
  "level": "2",
  "url": "sec-gaussian-elimination.html#thm-equivalent-row-ops",
  "type": "Theorem",
  "number": "1.4.7",
  "title": "",
  "body": "  Consider two linear systems each of equations in unknowns. If the augmented matrices and are row equivalent , then the linear systems are equivalent , i.e. the systems have the same solutions.   "
},
{
  "id": "act-1-1-solving-row-echelon-1",
  "level": "2",
  "url": "sec-gaussian-elimination.html#act-1-1-solving-row-echelon-1",
  "type": "Activity",
  "number": "1.4.4",
  "title": "Solving a Linear System Using Row Echelon Form.",
  "body": " Solving a Linear System Using Row Echelon Form   Solve the linear system by using to find a matrix in row echelon form which is row equivalent to the augmented matrix .    Augmented matrix: Subtract 2 times Row 1 from Row 2 and subtract 3 times Row 1 from Row 3: Multiply Row 2 by : Add 6 times Row 2 to Row 3: Multiply Row 3 by : This matrix is the augmented of the system of linear equations By , we know that this system is equivalent to the original system of equations specified by the problem. We now apply back substitution to solve the system:   Solving for  Row 3 tells us .   Solving for  Row 2 gives , and since , we calculate that .   Solving for  Row 1 gives , and since and , we calculate that .  So the unique solution is given by , ,    "
},
{
  "id": "sec-gaussian-elimination-16",
  "level": "2",
  "url": "sec-gaussian-elimination.html#sec-gaussian-elimination-16",
  "type": "Note",
  "number": "1.4.8",
  "title": "",
  "body": "  In , the coefficient matrix of is row equivalent to the identity matrix , i.e. the matrix When this happens, the system corresponding to has a unique solution.   "
},
{
  "id": "def-1-2-echelon-forms",
  "level": "2",
  "url": "sec-gaussian-elimination.html#def-1-2-echelon-forms",
  "type": "Definition",
  "number": "1.4.9",
  "title": "Echelon Forms for Linear Systems of Equations.",
  "body": " Echelon Forms for Linear Systems of Equations   If the augmented matrix of a linear system is a matrix in row echelon form, we say the linear system is in echelon form . The variables corresponding to columns with leading entries are called leading variables (or basic variables ), while the other variables are called free variables .   "
},
{
  "id": "sec-gaussian-elimination-19",
  "level": "2",
  "url": "sec-gaussian-elimination.html#sec-gaussian-elimination-19",
  "type": "Activity",
  "number": "1.4.5",
  "title": "Solving a System in REF.",
  "body": " Solving a System in REF   Let be the augmented matrix of a linear system. Solve the system.    The matrix is already in row echelon form, and so we need only back substitute to solve the basic variables. Let be the variables. Then the linear system with the corresponding augment matrix is given by The variables , , , and are the basic variables, and is a free variable.  Write the free variable as a parameter , i.e. write . The last row states that , which, given that , can be rearranged to read that . The third row states that . Substituting and into this equation and rearranging, we find that The second row states that . Substituting , , and into this equation, and rearranging, we find that Finally, the first row says that . Substituting , , , and into this equation and rearranging, we find that We now have our solution. All solutions to the linear equation can be written as , , , , and , where is any real number.   "
},
{
  "id": "sec-gaussian-elimination-20",
  "level": "2",
  "url": "sec-gaussian-elimination.html#sec-gaussian-elimination-20",
  "type": "Activity",
  "number": "1.4.6",
  "title": "Analyzing an Inconsistent System.",
  "body": " Analyzing an Inconsistent System   Consider a linear system with augmented matrix . Solve the system.    Let and be the variables of the linear system. Then the last row corresponds to the equation which occurs in the linear system. This equation is impossible to satisfy, since the left hand side is always equal to zero, whereas the right hand side is not zero. Therefore there are no solutions to this system The system is inconsistent (see ).   "
},
{
  "id": "alg-1-2-gaussian-elimination-algorithm",
  "level": "2",
  "url": "sec-gaussian-elimination.html#alg-1-2-gaussian-elimination-algorithm",
  "type": "Algorithm",
  "number": "1.4.10",
  "title": "The Gaussian Elimination Algorithm.",
  "body": " The Gaussian Elimination Algorithm  Solving a linear system using Gaussian Elimination:  Convert your linear system to an augmented matrix .  Use to obtain a matrix in row echelon form which is row equivalent to . By the linear systems corresponding to the two augmented matrices are equivalent.  If a leading one appears in the last column of , the system is inconsistent.  Otherwise, assign the free variables as parameters, and use the equations in the row echelon form to solve for the leading variables in terms of the parameters.    "
},
{
  "id": "def-1-2-rank",
  "level": "2",
  "url": "sec-gaussian-elimination.html#def-1-2-rank",
  "type": "Definition",
  "number": "1.4.11",
  "title": "The Rank of a Matrix.",
  "body": " The Rank of a Matrix   The rank of a matrix is the number of leading ones (i.e. the number of pivots) in any row echelon form that is row equivalent to .   "
},
{
  "id": "sec-gaussian-elimination-26",
  "level": "2",
  "url": "sec-gaussian-elimination.html#sec-gaussian-elimination-26",
  "type": "Activity",
  "number": "1.4.7",
  "title": "Finding the Rank of a Matrix.",
  "body": " Finding the Rank of a Matrix   Find the rank of     We convert the matrix to row echelon form using . Subtract 2 times Row 1 from Row 3:   Add Row 2 to Row 3:   The matrix is now in REF with 2 leading ones, and so the rank of is .   "
},
{
  "id": "sec-gaussian-elimination-27",
  "level": "2",
  "url": "sec-gaussian-elimination.html#sec-gaussian-elimination-27",
  "type": "Activity",
  "number": "1.4.8",
  "title": "Finding the Rank of a Matrix (Continued).",
  "body": " Finding the Rank of a Matrix (Continued)   Find the rank of     Subtract 2 times Row 1 from Row 3:   Subtract Row 2 from Row 3:   Multiply Row 3 by :   Matrix is now in REF with 3 leading ones, and so the rank of is .   "
},
{
  "id": "thm-1-2-number-parameters-linear",
  "level": "2",
  "url": "sec-gaussian-elimination.html#thm-1-2-number-parameters-linear",
  "type": "Theorem",
  "number": "1.4.12",
  "title": "",
  "body": "  Suppose a system of equations in variables is consistent (see ), and the rank of the augmented matrix is . Then   The set of solutions is specified in exactly parameters.  If , the system has infinitely many solutions.  If , the system has a unique solution.    "
},
{
  "id": "sec-gaussian-elimination-31",
  "level": "2",
  "url": "sec-gaussian-elimination.html#sec-gaussian-elimination-31",
  "type": "Activity",
  "number": "1.4.9",
  "title": "Analyzing Solution Sets Using Rank.",
  "body": " Analyzing Solution Sets Using Rank   If represents the augmented matrix for a system of 3 equations and 3 variables, what can we say about the solutions sets of the system?    We apply the Gaussian elimination algorithm:                    The system is consistent. There are two pivot columns, meaning one free variable. The system has infinitely many solutions, parameterized by the free variable.   "
},
{
  "id": "sec-gaussian-elimination-32",
  "level": "2",
  "url": "sec-gaussian-elimination.html#sec-gaussian-elimination-32",
  "type": "Activity",
  "number": "1.4.10",
  "title": "Analyzing Solution Sets Using Rank (Continued).",
  "body": " Analyzing Solution Sets Using Rank (Continued)   If represents the augmented matrix for a system of 3 equations and 3 variables, what can we say about the solutions sets of the system?    We start by applying Gaussian elimination to convert the matrix to row echelon form:                            The last row has a leading one in the last column, so the system is inconsistent; there are no solutions to the system of linear equations.   "
},
{
  "id": "sec-homogeneous-equations",
  "level": "1",
  "url": "sec-homogeneous-equations.html",
  "type": "Section",
  "number": "1.5",
  "title": "Homogeneous Equations",
  "body": " Homogeneous Equations   Solving a Homogeneous System   Solve the homogeneous system     Start by writing out the augmented matrix corresponding to the homogeneous system: We next use Gaussian elimination (recall ) to obtain a matrix in row echelon form which is row equivalent to the augmented matrix:                            If we convert this augmented matrix back to a system of equations, we can (recalling ) write the leading variables of the matrix (in this case, and ) in terms of the free variables ( and ): So if we let and , all solutions to the original linear system are of the form , , , and , where and are arbitrary real quantities.     Existence of Solutions to Homogeneous Equations  A homogeneous system of linear equations in unknowns always has a non-trivial solution if , that is if the number of unknowns exceeds the number of equations.    Thinking About Homogeneous Systems   Does a homogeneous system need to have more variables than equations in order to have infinitely many solutions?    No. Such an equation has infinitely many solutions if the rank of the augmented matrix for the system is smaller than .    We can also generate solutions for homogeneous systems using a finite set of starting solutions, by considering those solutions as vectors as in .   Summing Column Vectors and Scalar Multiples of Row and Column Vectors   A column vector is a matrix consisting of a single column, and a row vector is a matrix consisting of a single row.  Let and be column vectors of the same size, and let be a scalar\/real number. We define their sum  by adding their respective entries and the scalar product of with , denoted , by multiplying each entry of by .  In other words, if , then . Compare these definitions to those in and .  A column vector obtained from the sum of scalar multiples of several column vectors is called a linear combination of those column vectors. For example, if are column vectors, then for any choice of scalars , is a linear combination of and .  Sums, scalar products, and linear combinations of row vectors are defined analogously.     Calculating Linear Combinations   Simplify the following expressions for linear combinations of column vectors:     .    .    .        Solutions as Linear Combinations   Rewrite the general solution to as an expression involving a linear combination of certain column vectors.    Solution set:       If we consider solutions to a homogeneous system as vectors, then any linear combination of solutions to a homogeneous system is again a solution to the homogeneous system.     Finding Basic Solutions   Consider the homogeneous system whose augmented matrix, when put in RREF, is Solve the system, and write the solutions as a linear combination of particular solutions.    Interpret the RREF matrix as a system of linear equations: Next, solve for pivot variables: Express free variables as parameters:  Let and . Then   Now write the solutions in vector form:      Basic Solutions To Homogeneous Linear Equations   The Gaussian elimination algorithm produces, for each free variable, a solution to the homogeneous equation , only by setting that free variable equal to one, and all other free variables equal to . These solutions are called basic solutions , one for every parameter. Every solution can be written uniquely as a linear combination of the basic solutions.      Let be a rank matrix with rows and columns. Consider the homogeneous system in variables with as the coefficient matrix. Then:    The system has exactly basic solutions, one for each parameter. Note that is also the number of free variables of the linear system when is reduced to row echelon form (recall ).    Every solution is a linear combination of these basic solutions.      "
},
{
  "id": "act-1-3-homogenous-system-1",
  "level": "2",
  "url": "sec-homogeneous-equations.html#act-1-3-homogenous-system-1",
  "type": "Activity",
  "number": "1.5.1",
  "title": "Solving a Homogeneous System.",
  "body": " Solving a Homogeneous System   Solve the homogeneous system     Start by writing out the augmented matrix corresponding to the homogeneous system: We next use Gaussian elimination (recall ) to obtain a matrix in row echelon form which is row equivalent to the augmented matrix:                            If we convert this augmented matrix back to a system of equations, we can (recalling ) write the leading variables of the matrix (in this case, and ) in terms of the free variables ( and ): So if we let and , all solutions to the original linear system are of the form , , , and , where and are arbitrary real quantities.   "
},
{
  "id": "sec-homogeneous-equations-4",
  "level": "2",
  "url": "sec-homogeneous-equations.html#sec-homogeneous-equations-4",
  "type": "Activity",
  "number": "1.5.2",
  "title": "Thinking About Homogeneous Systems.",
  "body": " Thinking About Homogeneous Systems   Does a homogeneous system need to have more variables than equations in order to have infinitely many solutions?    No. Such an equation has infinitely many solutions if the rank of the augmented matrix for the system is smaller than .   "
},
{
  "id": "def-1-3-column-vectors",
  "level": "2",
  "url": "sec-homogeneous-equations.html#def-1-3-column-vectors",
  "type": "Definition",
  "number": "1.5.1",
  "title": "Summing Column Vectors and Scalar Multiples of Row and Column Vectors.",
  "body": " Summing Column Vectors and Scalar Multiples of Row and Column Vectors   A column vector is a matrix consisting of a single column, and a row vector is a matrix consisting of a single row.  Let and be column vectors of the same size, and let be a scalar\/real number. We define their sum  by adding their respective entries and the scalar product of with , denoted , by multiplying each entry of by .  In other words, if , then . Compare these definitions to those in and .  A column vector obtained from the sum of scalar multiples of several column vectors is called a linear combination of those column vectors. For example, if are column vectors, then for any choice of scalars , is a linear combination of and .  Sums, scalar products, and linear combinations of row vectors are defined analogously.   "
},
{
  "id": "sec-homogeneous-equations-7",
  "level": "2",
  "url": "sec-homogeneous-equations.html#sec-homogeneous-equations-7",
  "type": "Activity",
  "number": "1.5.3",
  "title": "Calculating Linear Combinations.",
  "body": " Calculating Linear Combinations   Simplify the following expressions for linear combinations of column vectors:     .    .    .      "
},
{
  "id": "sec-homogeneous-equations-8",
  "level": "2",
  "url": "sec-homogeneous-equations.html#sec-homogeneous-equations-8",
  "type": "Activity",
  "number": "1.5.4",
  "title": "Solutions as Linear Combinations.",
  "body": " Solutions as Linear Combinations   Rewrite the general solution to as an expression involving a linear combination of certain column vectors.    Solution set:    "
},
{
  "id": "sec-homogeneous-equations-9",
  "level": "2",
  "url": "sec-homogeneous-equations.html#sec-homogeneous-equations-9",
  "type": "Fact",
  "number": "1.5.2",
  "title": "",
  "body": "  If we consider solutions to a homogeneous system as vectors, then any linear combination of solutions to a homogeneous system is again a solution to the homogeneous system.   "
},
{
  "id": "sec-homogeneous-equations-10",
  "level": "2",
  "url": "sec-homogeneous-equations.html#sec-homogeneous-equations-10",
  "type": "Activity",
  "number": "1.5.5",
  "title": "Finding Basic Solutions.",
  "body": " Finding Basic Solutions   Consider the homogeneous system whose augmented matrix, when put in RREF, is Solve the system, and write the solutions as a linear combination of particular solutions.    Interpret the RREF matrix as a system of linear equations: Next, solve for pivot variables: Express free variables as parameters:  Let and . Then   Now write the solutions in vector form:    "
},
{
  "id": "def-1-3-homog-basic-solutions",
  "level": "2",
  "url": "sec-homogeneous-equations.html#def-1-3-homog-basic-solutions",
  "type": "Definition",
  "number": "1.5.3",
  "title": "Basic Solutions To Homogeneous Linear Equations.",
  "body": " Basic Solutions To Homogeneous Linear Equations   The Gaussian elimination algorithm produces, for each free variable, a solution to the homogeneous equation , only by setting that free variable equal to one, and all other free variables equal to . These solutions are called basic solutions , one for every parameter. Every solution can be written uniquely as a linear combination of the basic solutions.   "
},
{
  "id": "sec-homogeneous-equations-12",
  "level": "2",
  "url": "sec-homogeneous-equations.html#sec-homogeneous-equations-12",
  "type": "Theorem",
  "number": "1.5.4",
  "title": "",
  "body": "  Let be a rank matrix with rows and columns. Consider the homogeneous system in variables with as the coefficient matrix. Then:    The system has exactly basic solutions, one for each parameter. Note that is also the number of free variables of the linear system when is reduced to row echelon form (recall ).    Every solution is a linear combination of these basic solutions.     "
},
{
  "id": "sec-matrix-operations",
  "level": "1",
  "url": "sec-matrix-operations.html",
  "type": "Section",
  "number": "2.1",
  "title": "Matrix Addition, Scalar Multiplication, and Transposition",
  "body": " Matrix Addition, Scalar Multiplication, and Transposition   We've seen matrices used to help us solve systems of linear equations. We're now going to define them more formally and explore other ways to utilize them.    Matrix Notation   Matrices   An  matrix  is a rectangular array of real numbers arranged in  horizontal rows and  vertical columns :   The th row of is and the -th column of is   The number , which is in the th row and th column of , is the -entry of , and we often write . We say is an \" by \" matrix.      Consider the matrix  is a matrix. Compute the following:        1        2        5                  No such entry exists.    \\ Equality of Matrices   Two matrices and are equal if they have the same size and all the corresponding entries are equal.      Suppose and . Find and .    Since , all entries of must equal the corresponding entries in . So it must be true, comparing corresponding entries, that Therefore, and .      Matrix Operations   Sums of Matrices   If and are both matrices, then their sum  is the matrix where .      For the matrices calculate .        For to be defined, and must be the same size. From now on, if we write , assume that this is the case.    Scalar Multiples of Matrices   If is an matrix and is a real number, then the scalar multiple of by , written , is the matrix , where , that is, is the matrix obtained by multiplying every entry of by .      For as in , calculate .        Linear Combinations of Matrices   If are matrices and are real numbers, then an expression of the form is called a linear combination of . The scalars are called the coefficients of the linear combination.      Compute the following linear combination of matrices:            Let , , and be matrices.   , i.e., matrix addition is commutative .    , i.e., matrix addition is associative .    There is a unique matrix such that for any matrix . The matrix is called the  zero matrix , and is the matrix with zeroes in every entry.    For each matrix , there is a unique matrix such that . The matrix must be the matrix . The matrix is called the negative of .   Let and be real numbers. Then  .  .  .      We prove Property 1 only, i.e. the commutativity of addition. Let and . Then:       If is an matrix, then the transpose of , denoted , is the matrix defined by In other words, the transpose of is obtained by interchanging the rows and the columns of .      Compute the transpose for each of the given matrices:                                The Main Diagonal   If is an matrix, the elements are called the main diagonal of . A matrix is called diagonal if it's only non-zero entries occur on it's main diagonal.    Below are four matrices of various dimensions, with the main diagonal written in bold font. They are examples taken from Vretta-Lyryx .                 Forming the transpose of a matrix can be viewed as flipping  about its main diagonal.    If is a scalar and and are matrices of the appropriate sizes, then:  .  .  .      Proof of property (b):  Let and . Then where .  Then Therefore, .     Symmetry and Skew-Symmetry   A matrix with real entries is called:  Symmetric if .  Skew-symmetric if .        Determine whether the following matrices are symmetric, skew symmetric, or neither:         is skew symmetric since .         is symmetric since .         is neither symmetric nor skew symmetric.         is both symmetric and skew symmetric.     If a matrix is both symmetric and skew symmetric, then must be a zero matrix!    "
},
{
  "id": "def-matrix",
  "level": "2",
  "url": "sec-matrix-operations.html#def-matrix",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Matrices.",
  "body": " Matrices   An  matrix  is a rectangular array of real numbers arranged in  horizontal rows and  vertical columns :   The th row of is and the -th column of is   The number , which is in the th row and th column of , is the -entry of , and we often write . We say is an \" by \" matrix.   "
},
{
  "id": "ex-matrix-entries",
  "level": "2",
  "url": "sec-matrix-operations.html#ex-matrix-entries",
  "type": "Activity",
  "number": "2.1.1",
  "title": "",
  "body": "  Consider the matrix  is a matrix. Compute the following:        1        2        5                  No such entry exists.   "
},
{
  "id": "def-matrix-equality",
  "level": "2",
  "url": "sec-matrix-operations.html#def-matrix-equality",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Equality of Matrices.",
  "body": "\\ Equality of Matrices   Two matrices and are equal if they have the same size and all the corresponding entries are equal.   "
},
{
  "id": "ex-matrix-equality-solving",
  "level": "2",
  "url": "sec-matrix-operations.html#ex-matrix-equality-solving",
  "type": "Activity",
  "number": "2.1.2",
  "title": "",
  "body": "  Suppose and . Find and .    Since , all entries of must equal the corresponding entries in . So it must be true, comparing corresponding entries, that Therefore, and .   "
},
{
  "id": "def-matrix-sum",
  "level": "2",
  "url": "sec-matrix-operations.html#def-matrix-sum",
  "type": "Definition",
  "number": "2.1.3",
  "title": "Sums of Matrices.",
  "body": " Sums of Matrices   If and are both matrices, then their sum  is the matrix where .   "
},
{
  "id": "ex-matrix-addition",
  "level": "2",
  "url": "sec-matrix-operations.html#ex-matrix-addition",
  "type": "Activity",
  "number": "2.1.3",
  "title": "",
  "body": "  For the matrices calculate .      "
},
{
  "id": "note-matrix-addition-size",
  "level": "2",
  "url": "sec-matrix-operations.html#note-matrix-addition-size",
  "type": "Note",
  "number": "2.1.4",
  "title": "",
  "body": " For to be defined, and must be the same size. From now on, if we write , assume that this is the case.  "
},
{
  "id": "def-scalar-multiplication",
  "level": "2",
  "url": "sec-matrix-operations.html#def-scalar-multiplication",
  "type": "Definition",
  "number": "2.1.5",
  "title": "Scalar Multiples of Matrices.",
  "body": " Scalar Multiples of Matrices   If is an matrix and is a real number, then the scalar multiple of by , written , is the matrix , where , that is, is the matrix obtained by multiplying every entry of by .   "
},
{
  "id": "ex-scalar-multiplication",
  "level": "2",
  "url": "sec-matrix-operations.html#ex-scalar-multiplication",
  "type": "Activity",
  "number": "2.1.4",
  "title": "",
  "body": "  For as in , calculate .      "
},
{
  "id": "def-linear-combination",
  "level": "2",
  "url": "sec-matrix-operations.html#def-linear-combination",
  "type": "Definition",
  "number": "2.1.6",
  "title": "Linear Combinations of Matrices.",
  "body": " Linear Combinations of Matrices   If are matrices and are real numbers, then an expression of the form is called a linear combination of . The scalars are called the coefficients of the linear combination.   "
},
{
  "id": "ex-linear-combination",
  "level": "2",
  "url": "sec-matrix-operations.html#ex-linear-combination",
  "type": "Activity",
  "number": "2.1.5",
  "title": "",
  "body": "  Compute the following linear combination of matrices:         "
},
{
  "id": "subsec-matrix-addition-scalar-mult-9",
  "level": "2",
  "url": "sec-matrix-operations.html#subsec-matrix-addition-scalar-mult-9",
  "type": "Theorem",
  "number": "2.1.7",
  "title": "",
  "body": "  Let , , and be matrices.   , i.e., matrix addition is commutative .    , i.e., matrix addition is associative .    There is a unique matrix such that for any matrix . The matrix is called the  zero matrix , and is the matrix with zeroes in every entry.    For each matrix , there is a unique matrix such that . The matrix must be the matrix . The matrix is called the negative of .   Let and be real numbers. Then  .  .  .      We prove Property 1 only, i.e. the commutativity of addition. Let and . Then:    "
},
{
  "id": "def-matrix-transpose",
  "level": "2",
  "url": "sec-matrix-operations.html#def-matrix-transpose",
  "type": "Definition",
  "number": "2.1.8",
  "title": "",
  "body": "  If is an matrix, then the transpose of , denoted , is the matrix defined by In other words, the transpose of is obtained by interchanging the rows and the columns of .   "
},
{
  "id": "ex-matrix-transpose",
  "level": "2",
  "url": "sec-matrix-operations.html#ex-matrix-transpose",
  "type": "Activity",
  "number": "2.1.6",
  "title": "",
  "body": "  Compute the transpose for each of the given matrices:                              "
},
{
  "id": "def-matrix-main-diagonal",
  "level": "2",
  "url": "sec-matrix-operations.html#def-matrix-main-diagonal",
  "type": "Definition",
  "number": "2.1.9",
  "title": "The Main Diagonal.",
  "body": " The Main Diagonal   If is an matrix, the elements are called the main diagonal of . A matrix is called diagonal if it's only non-zero entries occur on it's main diagonal.   "
},
{
  "id": "subsec-matrix-addition-scalar-mult-16",
  "level": "2",
  "url": "sec-matrix-operations.html#subsec-matrix-addition-scalar-mult-16",
  "type": "Theorem",
  "number": "2.1.10",
  "title": "",
  "body": "  If is a scalar and and are matrices of the appropriate sizes, then:  .  .  .      Proof of property (b):  Let and . Then where .  Then Therefore, .   "
},
{
  "id": "def-symmetric-skew-symmetric",
  "level": "2",
  "url": "sec-matrix-operations.html#def-symmetric-skew-symmetric",
  "type": "Definition",
  "number": "2.1.11",
  "title": "Symmetry and Skew-Symmetry.",
  "body": " Symmetry and Skew-Symmetry   A matrix with real entries is called:  Symmetric if .  Skew-symmetric if .     "
},
{
  "id": "ex-symmetric-skew-symmetric",
  "level": "2",
  "url": "sec-matrix-operations.html#ex-symmetric-skew-symmetric",
  "type": "Activity",
  "number": "2.1.7",
  "title": "",
  "body": "  Determine whether the following matrices are symmetric, skew symmetric, or neither:         is skew symmetric since .         is symmetric since .         is neither symmetric nor skew symmetric.         is both symmetric and skew symmetric.   "
},
{
  "id": "note-zero-matrix-symmetric-skew",
  "level": "2",
  "url": "sec-matrix-operations.html#note-zero-matrix-symmetric-skew",
  "type": "Note",
  "number": "2.1.12",
  "title": "",
  "body": " If a matrix is both symmetric and skew symmetric, then must be a zero matrix!  "
},
{
  "id": "sec-matrix-vector-multiplication",
  "level": "1",
  "url": "sec-matrix-vector-multiplication.html",
  "type": "Section",
  "number": "2.2",
  "title": "Matrix-Vector Multiplication",
  "body": " Matrix-Vector Multiplication   Vectors as Matrices  Recall the notion of row and column vectors from . Row vectors and column vectors can be identified with the vectors occuring in , i.e. an ordered list of scalars. The only difference is that in a row vector the ordered list of numbers is arranged horizontally, and for a column vector the ordered list is arranged vertically. The distinguish between these types of vectors, we will say a row vector in and a column vector in .    Consider the vector . What kind of vector is it?     is a column vector in .     An matrix can be thought of a row of column vectors of length , i.e. we can write , where is a column vector in , the i-th column of .     Matrix-Vector Product  We start with an example.   Linear Systems as Linear Combinations   Consider the linear system Rewrite this system of linear equations as a single equation involving linear combinations of vectors.          Matrix-Vector Products   Let be an matrix, written in terms of its columns . If is any column vector in , the matrix-vector product  is defined to be the column vector in defined by .      Computing a Matrix-Vector Product   Compute the matrix-vector product where     Write where . Then     Notice that we can now write a linear system of equations as a single matrix equation: Consider a linear system of equations in unknowns of the form From this system, define the matrices .   Matrix Equation for Linear System   Using the matrices defined above, how can we rewrite the linear system as a single matrix equation?    We can rewrite this system as the matrix equation: .       Every system of linear equations has the form where is the coefficient matrix, is the constant matrix\/vector, and is the matrix\/vector of variables.  The system is consistent if and only if is a linear combination of the columns of .      Linear Combination of Columns   Is the vector a linear combination of the vectors ?    We need to solve the system: , which corresponds to the augmented matrix: . Start applying the Gaussian algorithm:             :        :       The last row of this matrix implies the system is inconsistent, so no solution exists. Thus, is not a linear combination of the given vectors.     Special Matrix-Vector Products   If , what is ?   If , then .    If is the zero matrix, what is ?   If is the zero matrix, then       Matrix-Vector Product Properties    Let and be matrices, and let and be column vectors in . Then:   for all scalars   These are distributive properties of matrix-vector products.     Proof of Scalar Distribution Property   Prove that for any scalar and matrix .    By the definition of matrix-vector multiplication, if has columns , then:   Multiplying by gives:   Applying to this vector:   If we multiply each column of by , we find that:   Applying to gives: .      Matrix-Vector Products Using Dot Products  We can express Matrix-Vector multiplication using dot products. Recall the definition of the dot product of two vectors from . Since row and column vectors can be considered as vectors, we can consider their dot products.   Computing a Dot Product   Compute the dot product of and .           Let be an matrix and let be a column vector in . Then each entry of the vector is the dot product of the corresponding row of with (see ).     The th entry of is obtained by taking the dot product of the th row of with the vector . Adapted from Vretta-Lyryx       Matrix-Vector Product via Dot Products   Compute the product using the dot product, where .        Conversely, the dot product can be calculated in terms of matrix multiplication. If we consider two -vectors and , then the scalar is equal to the only entry in the matrix .    The Identity Matrix   For each , the identity matrix  is the matrix with 1s on the main diagonal (upper left to lower right), and zeros elsewhere.    For example, we have .    For each and each column vector , .     Verifying Identity Matrix Property   Verify that for all column vectors .         Standard Basis Vectors   The Standard Basis   Let be the th column of , i.e., where , but for all . These vectors are called the standard basis vectors for (the word basis will be defined in ).  In , it is sometimes common to use the notation and for the standard basis and . Similarily, in it is common to use the notation , , and for the standard basis , , and . This notation is most common amongst physicists and engineers.     Finding a Standard Basis Vector   For , what is ?          Matrix-Vector Product with Standard Basis Vector   Compute for            If is an matrix, then for , .      Let and be matrices. If for all in , then .     Proof of Matrix Equality   Prove the theorem above.    Since for all , choose for . Then for all . But using , this means that the th column of is equal to the column of . Since this is true for all , .      Transformations  Geometric operations can be described via matrix-vector products.     Transformations   A function is called a transformation from to . A transformation assigns to each vector in a uniquely determined vector in , called the image of under .     Finding Image of a Vector   Consider given by . What is the image of the vector under ?     .     Matrix Transformations   Given an matrix , we can consider the transformation given by multiplying vectors by (viewing those vectors as column vectors), i.e. . For each in . is called the matrix transformation induced by .     Reflection Transformation   Consider the transformation in given by reflection across the -axis, i.e. so that the vector is sent to the vector . We can represent this reflection via a matrix-vector product. Find the matrix.          Identifying Matrix Transformations   Is the transformation defined by a matrix transformation?    Yes, is a matrix transformation, since it can be written as where         Are all transformations realizable as matrix transformations?     "
},
{
  "id": "sec-matrix-vector-multiplication-2-3",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-2-3",
  "type": "Activity",
  "number": "2.2.1",
  "title": "",
  "body": "  Consider the vector . What kind of vector is it?     is a column vector in .   "
},
{
  "id": "sec-matrix-vector-multiplication-2-4",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-2-4",
  "type": "Note",
  "number": "2.2.1",
  "title": "",
  "body": " An matrix can be thought of a row of column vectors of length , i.e. we can write , where is a column vector in , the i-th column of .  "
},
{
  "id": "sec-matrix-vector-multiplication-3-3",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-3-3",
  "type": "Activity",
  "number": "2.2.2",
  "title": "Linear Systems as Linear Combinations.",
  "body": " Linear Systems as Linear Combinations   Consider the linear system Rewrite this system of linear equations as a single equation involving linear combinations of vectors.        "
},
{
  "id": "def-2-2-matrix-vector-product",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#def-2-2-matrix-vector-product",
  "type": "Definition",
  "number": "2.2.2",
  "title": "Matrix-Vector Products.",
  "body": " Matrix-Vector Products   Let be an matrix, written in terms of its columns . If is any column vector in , the matrix-vector product  is defined to be the column vector in defined by .   "
},
{
  "id": "sec-matrix-vector-multiplication-3-5",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-3-5",
  "type": "Activity",
  "number": "2.2.3",
  "title": "Computing a Matrix-Vector Product.",
  "body": " Computing a Matrix-Vector Product   Compute the matrix-vector product where     Write where . Then    "
},
{
  "id": "sec-matrix-vector-multiplication-3-7",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-3-7",
  "type": "Activity",
  "number": "2.2.4",
  "title": "Matrix Equation for Linear System.",
  "body": " Matrix Equation for Linear System   Using the matrices defined above, how can we rewrite the linear system as a single matrix equation?    We can rewrite this system as the matrix equation: .   "
},
{
  "id": "sec-matrix-vector-multiplication-3-9",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-3-9",
  "type": "Activity",
  "number": "2.2.5",
  "title": "Linear Combination of Columns.",
  "body": " Linear Combination of Columns   Is the vector a linear combination of the vectors ?    We need to solve the system: , which corresponds to the augmented matrix: . Start applying the Gaussian algorithm:             :        :       The last row of this matrix implies the system is inconsistent, so no solution exists. Thus, is not a linear combination of the given vectors.   "
},
{
  "id": "sec-matrix-vector-multiplication-3-10",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-3-10",
  "type": "Activity",
  "number": "2.2.6",
  "title": "Special Matrix-Vector Products.",
  "body": " Special Matrix-Vector Products   If , what is ?   If , then .    If is the zero matrix, what is ?   If is the zero matrix, then    "
},
{
  "id": "thm-2-2-distributive-properties",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#thm-2-2-distributive-properties",
  "type": "Theorem",
  "number": "2.2.3",
  "title": "",
  "body": "  Let and be matrices, and let and be column vectors in . Then:   for all scalars   These are distributive properties of matrix-vector products.   "
},
{
  "id": "sec-matrix-vector-multiplication-4-3",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-4-3",
  "type": "Activity",
  "number": "2.2.7",
  "title": "Proof of Scalar Distribution Property.",
  "body": " Proof of Scalar Distribution Property   Prove that for any scalar and matrix .    By the definition of matrix-vector multiplication, if has columns , then:   Multiplying by gives:   Applying to this vector:   If we multiply each column of by , we find that:   Applying to gives: .   "
},
{
  "id": "sec-matrix-vector-multiplication-5-3",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-5-3",
  "type": "Activity",
  "number": "2.2.8",
  "title": "Computing a Dot Product.",
  "body": " Computing a Dot Product   Compute the dot product of and .        "
},
{
  "id": "sec-matrix-vector-multiplication-5-4",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-5-4",
  "type": "Theorem",
  "number": "2.2.4",
  "title": "",
  "body": "  Let be an matrix and let be a column vector in . Then each entry of the vector is the dot product of the corresponding row of with (see ).   "
},
{
  "id": "fig-matrix-dot-product",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#fig-matrix-dot-product",
  "type": "Figure",
  "number": "2.2.5",
  "title": "",
  "body": " The th entry of is obtained by taking the dot product of the th row of with the vector . Adapted from Vretta-Lyryx     "
},
{
  "id": "sec-matrix-vector-multiplication-5-6",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-5-6",
  "type": "Activity",
  "number": "2.2.9",
  "title": "Matrix-Vector Product via Dot Products.",
  "body": " Matrix-Vector Product via Dot Products   Compute the product using the dot product, where .      "
},
{
  "id": "sec-matrix-vector-multiplication-5-7",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-5-7",
  "type": "Remark",
  "number": "2.2.6",
  "title": "",
  "body": " Conversely, the dot product can be calculated in terms of matrix multiplication. If we consider two -vectors and , then the scalar is equal to the only entry in the matrix .  "
},
{
  "id": "sec-matrix-vector-multiplication-5-8",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-5-8",
  "type": "Definition",
  "number": "2.2.7",
  "title": "The Identity Matrix.",
  "body": " The Identity Matrix   For each , the identity matrix  is the matrix with 1s on the main diagonal (upper left to lower right), and zeros elsewhere.   "
},
{
  "id": "sec-matrix-vector-multiplication-5-10",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-5-10",
  "type": "Fact",
  "number": "2.2.8",
  "title": "",
  "body": "  For each and each column vector , .   "
},
{
  "id": "sec-matrix-vector-multiplication-5-11",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-5-11",
  "type": "Activity",
  "number": "2.2.10",
  "title": "Verifying Identity Matrix Property.",
  "body": " Verifying Identity Matrix Property   Verify that for all column vectors .      "
},
{
  "id": "def-2-2-standard-basis",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#def-2-2-standard-basis",
  "type": "Definition",
  "number": "2.2.9",
  "title": "The Standard Basis.",
  "body": " The Standard Basis   Let be the th column of , i.e., where , but for all . These vectors are called the standard basis vectors for (the word basis will be defined in ).  In , it is sometimes common to use the notation and for the standard basis and . Similarily, in it is common to use the notation , , and for the standard basis , , and . This notation is most common amongst physicists and engineers.   "
},
{
  "id": "sec-matrix-vector-multiplication-6-3",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-6-3",
  "type": "Activity",
  "number": "2.2.11",
  "title": "Finding a Standard Basis Vector.",
  "body": " Finding a Standard Basis Vector   For , what is ?        "
},
{
  "id": "sec-matrix-vector-multiplication-6-4",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-6-4",
  "type": "Activity",
  "number": "2.2.12",
  "title": "Matrix-Vector Product with Standard Basis Vector.",
  "body": " Matrix-Vector Product with Standard Basis Vector   Compute for         "
},
{
  "id": "fact-2-2-standard-basis",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#fact-2-2-standard-basis",
  "type": "Fact",
  "number": "2.2.10",
  "title": "",
  "body": "  If is an matrix, then for , .   "
},
{
  "id": "sec-matrix-vector-multiplication-6-6",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-6-6",
  "type": "Theorem",
  "number": "2.2.11",
  "title": "",
  "body": "  Let and be matrices. If for all in , then .   "
},
{
  "id": "sec-matrix-vector-multiplication-6-7",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-6-7",
  "type": "Activity",
  "number": "2.2.13",
  "title": "Proof of Matrix Equality.",
  "body": " Proof of Matrix Equality   Prove the theorem above.    Since for all , choose for . Then for all . But using , this means that the th column of is equal to the column of . Since this is true for all , .   "
},
{
  "id": "sec-matrix-vector-multiplication-7-3",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-7-3",
  "type": "Definition",
  "number": "2.2.12",
  "title": "Transformations.",
  "body": " Transformations   A function is called a transformation from to . A transformation assigns to each vector in a uniquely determined vector in , called the image of under .   "
},
{
  "id": "sec-matrix-vector-multiplication-7-4",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-7-4",
  "type": "Activity",
  "number": "2.2.14",
  "title": "Finding Image of a Vector.",
  "body": " Finding Image of a Vector   Consider given by . What is the image of the vector under ?     .   "
},
{
  "id": "def-3-2-matrix-transformation",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#def-3-2-matrix-transformation",
  "type": "Definition",
  "number": "2.2.13",
  "title": "Matrix Transformations.",
  "body": " Matrix Transformations   Given an matrix , we can consider the transformation given by multiplying vectors by (viewing those vectors as column vectors), i.e. . For each in . is called the matrix transformation induced by .   "
},
{
  "id": "sec-matrix-vector-multiplication-7-6",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-7-6",
  "type": "Activity",
  "number": "2.2.15",
  "title": "Reflection Transformation.",
  "body": " Reflection Transformation   Consider the transformation in given by reflection across the -axis, i.e. so that the vector is sent to the vector . We can represent this reflection via a matrix-vector product. Find the matrix.        "
},
{
  "id": "sec-matrix-vector-multiplication-7-7",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-7-7",
  "type": "Activity",
  "number": "2.2.16",
  "title": "Identifying Matrix Transformations.",
  "body": " Identifying Matrix Transformations   Is the transformation defined by a matrix transformation?    Yes, is a matrix transformation, since it can be written as where      "
},
{
  "id": "sec-matrix-vector-multiplication-7-8",
  "level": "2",
  "url": "sec-matrix-vector-multiplication.html#sec-matrix-vector-multiplication-7-8",
  "type": "Activity",
  "number": "2.2.17",
  "title": "",
  "body": "  Are all transformations realizable as matrix transformations?   "
},
{
  "id": "sec-matrix-multiplication",
  "level": "1",
  "url": "sec-matrix-multiplication.html",
  "type": "Section",
  "number": "2.3",
  "title": "Matrix Multiplication",
  "body": " Matrix Multiplication   Definition of Matrix Product    Let be an matrix, be an matrix, and write where is column of . The product matrix is the matrix defined by . in other words, column of is the matrix-vector product of and the corresponding column of .     Computing Matrix Product Using Columns   Let . Compute .    Following the definition, we write in terms of its columns: Then where and Therefore .     Matrix Transformations and Composition   Let be and be , and build the induced matrix transformations , and . Consider the composition of and , i.e. the transformation defined by . Compute for a general .    Let . By the definition of the matrix-vector product (Recall ): , where is column of .  Therefore:       If is and is , then the composite of their induced matrix transformations is another matrix transformation, and , where is the matrix product.      Dot Product Definition of Matrix Product    Let be an matrix, be an matrix. The entry of is the dot product of row of with column of .    This process is shown in the schematic below:   where .   The th entry of is obtained by taking the dot product of the th row of with the th column of . Adapted from Vretta-Lyryx .       Computing a Matrix Entry   Let     What is the entry of ?    It is the dot product of Row 2 of and Column 3 of : .      Properties of Matrix Multiplication   Properties of Matrix Multiplication   Assume that are matrices of appropriate sizes. Then:  , i.e. matrix multiplication is associative           Proving Distribution Property   Prove that for any scalar .    Let be an matrix and be an matrix. Then: Similarly,      Let be an matrix and be a matrix, so that their product is a matrix.    The product may not be defined!    If is also defined, the size of and may be the same or different.    In the case where and are the same size, and may be equal or they may be different.      Comparing Matrix Products   Let Calculate and compare and , if they are defined.     The products and are both well defined, but are not equal.     Matrix Product Size Analysis   Consider the following matrices: For each of the following products, determine (i) whether the product is defined, and (ii) if defined, what is the size of the resulting matrix.        The matrix is and the matrix is .  is defined because the number of columns of ( ) equals the number of rows of ( )  The resulting matrix will be          The matrix is and matrix is   is defined because the number of columns of ( ) equals the number of rows of ( )  The resulting matrix will be          The Matrix is and matrix is .  is defined because the number of columns of ( ) equals the number of rows of ( )  The resulting matrix will be          Matrix is and matrix is   is not defined because the number of columns of ( ) does not equal the number of rows of ( )       A Key Property of Identity Matrices   If is any matrix,       Matrix Powers Using the definition of matrix multiplication, we can also define the powers of square matrices.  Matrix Powers   Let be a square matrix. Then we define , , and so on. We make the convention that .     If and are nonnegative integers, then and But it is not necessarily the case that . Why?    "
},
{
  "id": "sec-matrix-multiplication-2-2",
  "level": "2",
  "url": "sec-matrix-multiplication.html#sec-matrix-multiplication-2-2",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  Let be an matrix, be an matrix, and write where is column of . The product matrix is the matrix defined by . in other words, column of is the matrix-vector product of and the corresponding column of .   "
},
{
  "id": "sec-matrix-multiplication-2-3",
  "level": "2",
  "url": "sec-matrix-multiplication.html#sec-matrix-multiplication-2-3",
  "type": "Activity",
  "number": "2.3.1",
  "title": "Computing Matrix Product Using Columns.",
  "body": " Computing Matrix Product Using Columns   Let . Compute .    Following the definition, we write in terms of its columns: Then where and Therefore .   "
},
{
  "id": "act-3-3-composition-matrix",
  "level": "2",
  "url": "sec-matrix-multiplication.html#act-3-3-composition-matrix",
  "type": "Activity",
  "number": "2.3.2",
  "title": "Matrix Transformations and Composition.",
  "body": " Matrix Transformations and Composition   Let be and be , and build the induced matrix transformations , and . Consider the composition of and , i.e. the transformation defined by . Compute for a general .    Let . By the definition of the matrix-vector product (Recall ): , where is column of .  Therefore:    "
},
{
  "id": "sec-matrix-multiplication-2-5",
  "level": "2",
  "url": "sec-matrix-multiplication.html#sec-matrix-multiplication-2-5",
  "type": "Fact",
  "number": "2.3.2",
  "title": "",
  "body": "  If is and is , then the composite of their induced matrix transformations is another matrix transformation, and , where is the matrix product.   "
},
{
  "id": "thm-3-3-matrix-multiplication-dot-product",
  "level": "2",
  "url": "sec-matrix-multiplication.html#thm-3-3-matrix-multiplication-dot-product",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "",
  "body": "  Let be an matrix, be an matrix. The entry of is the dot product of row of with column of .   "
},
{
  "id": "fig-AB-dotproduct",
  "level": "2",
  "url": "sec-matrix-multiplication.html#fig-AB-dotproduct",
  "type": "Figure",
  "number": "2.3.4",
  "title": "",
  "body": " The th entry of is obtained by taking the dot product of the th row of with the th column of . Adapted from Vretta-Lyryx .     "
},
{
  "id": "sec-matrix-multiplication-3-7",
  "level": "2",
  "url": "sec-matrix-multiplication.html#sec-matrix-multiplication-3-7",
  "type": "Activity",
  "number": "2.3.3",
  "title": "Computing a Matrix Entry.",
  "body": " Computing a Matrix Entry   Let     What is the entry of ?    It is the dot product of Row 2 of and Column 3 of : .   "
},
{
  "id": "thm-2-3-matrix-multiplication-properties",
  "level": "2",
  "url": "sec-matrix-multiplication.html#thm-2-3-matrix-multiplication-properties",
  "type": "Theorem",
  "number": "2.3.5",
  "title": "Properties of Matrix Multiplication.",
  "body": " Properties of Matrix Multiplication   Assume that are matrices of appropriate sizes. Then:  , i.e. matrix multiplication is associative         "
},
{
  "id": "sec-matrix-multiplication-4-3",
  "level": "2",
  "url": "sec-matrix-multiplication.html#sec-matrix-multiplication-4-3",
  "type": "Activity",
  "number": "2.3.4",
  "title": "Proving Distribution Property.",
  "body": " Proving Distribution Property   Prove that for any scalar .    Let be an matrix and be an matrix. Then: Similarly,    "
},
{
  "id": "sec-matrix-multiplication-4-4",
  "level": "2",
  "url": "sec-matrix-multiplication.html#sec-matrix-multiplication-4-4",
  "type": "Warning",
  "number": "2.3.6",
  "title": "",
  "body": " Let be an matrix and be a matrix, so that their product is a matrix.    The product may not be defined!    If is also defined, the size of and may be the same or different.    In the case where and are the same size, and may be equal or they may be different.    "
},
{
  "id": "sec-matrix-multiplication-4-5",
  "level": "2",
  "url": "sec-matrix-multiplication.html#sec-matrix-multiplication-4-5",
  "type": "Activity",
  "number": "2.3.5",
  "title": "Comparing Matrix Products.",
  "body": " Comparing Matrix Products   Let Calculate and compare and , if they are defined.     The products and are both well defined, but are not equal.   "
},
{
  "id": "sec-matrix-multiplication-4-6",
  "level": "2",
  "url": "sec-matrix-multiplication.html#sec-matrix-multiplication-4-6",
  "type": "Activity",
  "number": "2.3.6",
  "title": "Matrix Product Size Analysis.",
  "body": " Matrix Product Size Analysis   Consider the following matrices: For each of the following products, determine (i) whether the product is defined, and (ii) if defined, what is the size of the resulting matrix.        The matrix is and the matrix is .  is defined because the number of columns of ( ) equals the number of rows of ( )  The resulting matrix will be          The matrix is and matrix is   is defined because the number of columns of ( ) equals the number of rows of ( )  The resulting matrix will be          The Matrix is and matrix is .  is defined because the number of columns of ( ) equals the number of rows of ( )  The resulting matrix will be          Matrix is and matrix is   is not defined because the number of columns of ( ) does not equal the number of rows of ( )     "
},
{
  "id": "sec-matrix-multiplication-4-7",
  "level": "2",
  "url": "sec-matrix-multiplication.html#sec-matrix-multiplication-4-7",
  "type": "Fact",
  "number": "2.3.7",
  "title": "A Key Property of Identity Matrices.",
  "body": " A Key Property of Identity Matrices   If is any matrix,    "
},
{
  "id": "sec-matrix-multiplication-5-2",
  "level": "2",
  "url": "sec-matrix-multiplication.html#sec-matrix-multiplication-5-2",
  "type": "Definition",
  "number": "2.3.8",
  "title": "Matrix Powers.",
  "body": " Matrix Powers   Let be a square matrix. Then we define , , and so on. We make the convention that .   "
},
{
  "id": "sec-matrix-multiplication-5-3",
  "level": "2",
  "url": "sec-matrix-multiplication.html#sec-matrix-multiplication-5-3",
  "type": "Warning",
  "number": "2.3.9",
  "title": "",
  "body": " If and are nonnegative integers, then and But it is not necessarily the case that . Why?  "
},
{
  "id": "sec-linear-transformations",
  "level": "1",
  "url": "sec-linear-transformations.html",
  "type": "Section",
  "number": "2.4",
  "title": "Linear Transformations",
  "body": " Linear Transformations  What makes a transformation a matrix transformation?   Linear Transformations   A transformation is a linear transformation if  for every .  for every and .       Verifying Linear Transformations   Identifying with , show that is a linear transformation, while is not.    For : and Therefore is a linear transformation.  For : and but it is not always true (and in fact, is almost never true) that . So it is not always true that , and so is not a linear transformation.     Properties of Linear Transformations  Suppose is a linear transformation.   Find .   Since , , so .     .    .    Recall the notion of a linear combination from , i.e. that a vector is a linear combination of vectors if there are scalars such that     If is a linear transformation, then      Finding Images Under Linear Transformations   Suppose is a linear transformation with and . Find .    We plan to use . To do this, we need to write the vector as a linear combination of and .  Let be scalars such that: In order for this equation to hold, the scalars and must satisfy the system of linear equations:   From the second equation:   Substituting into the first equation: , so .  Therefore, . By the linearity of and ,       Let be a transformation.   is a linear transformation if and only if it is a matrix transformation.  In this case, is the matrix transformation induced by the unique matrix , given in terms of its columns by    where are the standard basis vectors of .    First, we show that if is a matrix transformation, then it is linear. If for a matrix , then the distributive properties from show that: and By , this shows is linear.  Now we show that if is any linear transformation, then it is a matrix transformation. Define a matrix . For any , we can write: By linearity, Therefore is a matrix transformation.  To show that a linear transformation is a matrix transformation for a unique matrix , suppose for some other matrix . Then it would be true that for each standard basis vector . But (recall ) is the th column of , and is the th column of . Therefore the columns of and are identical, so .      If , and are linear transformations, then is a linear transformation.     Finding Matrix Representation   Define by     Show is a linear transformation.   Let's verify both properties of linear transformations: and     Find , where .   To find , we need and : Therefore: .    Is there an in with ?   We need to solve the equation . This gives the system   From second equation:  From third equation:  If and , the first equation reads , which is never true. So the system has no solution, and so there is no such .    "
},
{
  "id": "def-2-4-linear-transformation",
  "level": "2",
  "url": "sec-linear-transformations.html#def-2-4-linear-transformation",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Linear Transformations.",
  "body": " Linear Transformations   A transformation is a linear transformation if  for every .  for every and .     "
},
{
  "id": "sec-linear-transformations-4",
  "level": "2",
  "url": "sec-linear-transformations.html#sec-linear-transformations-4",
  "type": "Activity",
  "number": "2.4.1",
  "title": "Verifying Linear Transformations.",
  "body": " Verifying Linear Transformations   Identifying with , show that is a linear transformation, while is not.    For : and Therefore is a linear transformation.  For : and but it is not always true (and in fact, is almost never true) that . So it is not always true that , and so is not a linear transformation.   "
},
{
  "id": "sec-linear-transformations-5",
  "level": "2",
  "url": "sec-linear-transformations.html#sec-linear-transformations-5",
  "type": "Activity",
  "number": "2.4.2",
  "title": "Properties of Linear Transformations.",
  "body": " Properties of Linear Transformations  Suppose is a linear transformation.   Find .   Since , , so .     .    .   "
},
{
  "id": "sec-linear-transformations-6",
  "level": "2",
  "url": "sec-linear-transformations.html#sec-linear-transformations-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear combination "
},
{
  "id": "thm-2-4-linear-combination-transform",
  "level": "2",
  "url": "sec-linear-transformations.html#thm-2-4-linear-combination-transform",
  "type": "Theorem",
  "number": "2.4.2",
  "title": "",
  "body": "  If is a linear transformation, then    "
},
{
  "id": "sec-linear-transformations-8",
  "level": "2",
  "url": "sec-linear-transformations.html#sec-linear-transformations-8",
  "type": "Activity",
  "number": "2.4.3",
  "title": "Finding Images Under Linear Transformations.",
  "body": " Finding Images Under Linear Transformations   Suppose is a linear transformation with and . Find .    We plan to use . To do this, we need to write the vector as a linear combination of and .  Let be scalars such that: In order for this equation to hold, the scalars and must satisfy the system of linear equations:   From the second equation:   Substituting into the first equation: , so .  Therefore, . By the linearity of and ,    "
},
{
  "id": "thm-linear-transformation-matrix",
  "level": "2",
  "url": "sec-linear-transformations.html#thm-linear-transformation-matrix",
  "type": "Theorem",
  "number": "2.4.3",
  "title": "",
  "body": "  Let be a transformation.   is a linear transformation if and only if it is a matrix transformation.  In this case, is the matrix transformation induced by the unique matrix , given in terms of its columns by    where are the standard basis vectors of .    First, we show that if is a matrix transformation, then it is linear. If for a matrix , then the distributive properties from show that: and By , this shows is linear.  Now we show that if is any linear transformation, then it is a matrix transformation. Define a matrix . For any , we can write: By linearity, Therefore is a matrix transformation.  To show that a linear transformation is a matrix transformation for a unique matrix , suppose for some other matrix . Then it would be true that for each standard basis vector . But (recall ) is the th column of , and is the th column of . Therefore the columns of and are identical, so .   "
},
{
  "id": "sec-linear-transformations-10",
  "level": "2",
  "url": "sec-linear-transformations.html#sec-linear-transformations-10",
  "type": "Corollary",
  "number": "2.4.4",
  "title": "",
  "body": "  If , and are linear transformations, then is a linear transformation.   "
},
{
  "id": "sec-linear-transformations-11",
  "level": "2",
  "url": "sec-linear-transformations.html#sec-linear-transformations-11",
  "type": "Activity",
  "number": "2.4.4",
  "title": "Finding Matrix Representation.",
  "body": " Finding Matrix Representation   Define by     Show is a linear transformation.   Let's verify both properties of linear transformations: and     Find , where .   To find , we need and : Therefore: .    Is there an in with ?   We need to solve the equation . This gives the system   From second equation:  From third equation:  If and , the first equation reads , which is never true. So the system has no solution, and so there is no such .   "
},
{
  "id": "sec-matrix-inverses",
  "level": "1",
  "url": "sec-matrix-inverses.html",
  "type": "Section",
  "number": "2.5",
  "title": "Matrix inverses",
  "body": " Matrix inverses   Definition of Invertibility   Invertibility of Matrices   An matrix is called nonsingular , or invertible , if there exists an matrix such that . Such a is called the inverse of . If no such exists, is called singular or noninvertible .     The inverse of a matrix mimics the reciprocal of a real number.     Let . Compute both and , and make a conclusion using the language of inverses.     Therefore, is the inverse of .      The inverse of a matrix, if it exists, is unique. Therefore, we can write for the inverse of .      If , then .      Does have an inverse?    Let's suppose had an inverse . Then:   This gives us the system of linear equations in four unknowns: The last equation states that , which is impossible.  Therefore, cannot have an inverse. This means is singular.      If both and are nonsingular matrices, then the matrix is nonsingular and its inverse is .    It suffices to calculate that and . Firstly, . Similarly, .     Follow Up Facts About Invertibility      If are invertible \/ nonsingular matrices, then is invertible \/ nonsingular and .    If is invertible\/nonsingular, then is invertible\/nonsingular and .    If is invertible\/nonsingular, then is invertible\/nonsingular and .         The matrix is invertible if and only if , in which case   We define the determinant of the matrix to be the quantity . Thus the matrix is invertible if and only if it's determinant is non-vanishing. We'll learn how to compute inverses for bigger matrices soon.      Find the inverse of each matrix, if possible.         , so is not invertible.         , so .      Linear Systems and Inverses  If is an matrix, then the linear system is a system of equations in unknowns. Suppose is nonsingular. How can we use to solve the system ?    Solve the system using the inverse of .    Multiply both sides of by on the left:   Therefore, when is nonsingular, is the solution to .    Consequences:   When exists, then has a unique solution.  If is invertible\/nonsingular, then the only solution to the homogeneous system is .     Suppose that . Use this information to calculate the following:                                 Algorithm for Calculating Inverses  For a given matrix , if we are looking for an inverse for (call this matrix ), we must have . We are solving linear systems simultaneously:    Describe the system of linear equations for finding the inverse.    We need to solve these systems:     Since, to solve each system, we wish to reduce the matrix down to its RREF each time, we can combine all the systems into one big augmented matrix:    Write the augmented matrix for finding the inverse.       It follows from that if is row reducible to , then . In particular, if we can row reduce to , then it follows that . Gaussian elimination ( ) will reduce a given matrix to this form, provided that an inverse exists.   Algorithm for Computing    Set up the augmented matrix .  Apply elementary row operations to to reduce it to .   If is an matrix, either can be reduced to by elementary row operations or it cannot. In the first case, the algorithm produces ; in the second case, does not exist.      Find where .    Start with :   Perform row operations:                            Therefore:      Box of Facts\/Invertibility Criteria   Let be an matrix. The following are equivalent:   is nonsingular.  has only the trivial solution.  is row equivalent to .  The linear system has a unique solution for every matrix .  The rank of is .       Inverses of Matrix Transformations  Let be a matrix transformation induced by the matrix . What does invertibility imply about the geometry of the transformation ?  Consider . What happens when we compose them?    Compute the composition of and in both orders.    Let's examine the composition of and :   Similarly, for the reverse composition:       Given a matrix transformation , if there exists a transformation such that for all , we say that has an inverse.      Let denote the matrix transformation induced by an matrix . Then:   is invertible if and only if has an inverse.  In this case, has exactly one inverse (which we denote as ), and is the transformation induced by the matrix .   In other words, .  and  reverse or undo the action of each other.      Consider given by reflection across the -axis. Find the matrix representing this transformation, and find the inverse.    is given by matrix  Since , is its own inverse, so .      Consider the transformation defined by .    Is a matrix transformation? If so, find the matrix corresponding to .   Yes, is a matrix transformation. It can be represented by the matrix To verify:     Is an invertible transformation?   No, is not invertible. Note that , and so is not an invertible matrix, and so cannot be an invertible transformation.     "
},
{
  "id": "subsec-definition-of-invertibility-2",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-definition-of-invertibility-2",
  "type": "Definition",
  "number": "2.5.1",
  "title": "Invertibility of Matrices.",
  "body": " Invertibility of Matrices   An matrix is called nonsingular , or invertible , if there exists an matrix such that . Such a is called the inverse of . If no such exists, is called singular or noninvertible .   "
},
{
  "id": "subsec-definition-of-invertibility-3",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-definition-of-invertibility-3",
  "type": "Note",
  "number": "2.5.2",
  "title": "",
  "body": " The inverse of a matrix mimics the reciprocal of a real number.  "
},
{
  "id": "subsec-definition-of-invertibility-4",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-definition-of-invertibility-4",
  "type": "Activity",
  "number": "2.5.1",
  "title": "",
  "body": "  Let . Compute both and , and make a conclusion using the language of inverses.     Therefore, is the inverse of .   "
},
{
  "id": "subsec-definition-of-invertibility-5",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-definition-of-invertibility-5",
  "type": "Fact",
  "number": "2.5.3",
  "title": "",
  "body": "  The inverse of a matrix, if it exists, is unique. Therefore, we can write for the inverse of .   "
},
{
  "id": "subsec-definition-of-invertibility-6",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-definition-of-invertibility-6",
  "type": "Fact",
  "number": "2.5.4",
  "title": "",
  "body": "  If , then .   "
},
{
  "id": "subsec-definition-of-invertibility-7",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-definition-of-invertibility-7",
  "type": "Activity",
  "number": "2.5.2",
  "title": "",
  "body": "  Does have an inverse?    Let's suppose had an inverse . Then:   This gives us the system of linear equations in four unknowns: The last equation states that , which is impossible.  Therefore, cannot have an inverse. This means is singular.   "
},
{
  "id": "subsec-definition-of-invertibility-8",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-definition-of-invertibility-8",
  "type": "Theorem",
  "number": "2.5.5",
  "title": "",
  "body": "  If both and are nonsingular matrices, then the matrix is nonsingular and its inverse is .    It suffices to calculate that and . Firstly, . Similarly, .   "
},
{
  "id": "fact-2-5-follow-up-invertibility-facts",
  "level": "2",
  "url": "sec-matrix-inverses.html#fact-2-5-follow-up-invertibility-facts",
  "type": "Fact",
  "number": "2.5.6",
  "title": "Follow Up Facts About Invertibility.",
  "body": " Follow Up Facts About Invertibility      If are invertible \/ nonsingular matrices, then is invertible \/ nonsingular and .    If is invertible\/nonsingular, then is invertible\/nonsingular and .    If is invertible\/nonsingular, then is invertible\/nonsingular and .      "
},
{
  "id": "thm-2-5-determinant-of-two-by-two",
  "level": "2",
  "url": "sec-matrix-inverses.html#thm-2-5-determinant-of-two-by-two",
  "type": "Theorem",
  "number": "2.5.7",
  "title": "",
  "body": "  The matrix is invertible if and only if , in which case   We define the determinant of the matrix to be the quantity . Thus the matrix is invertible if and only if it's determinant is non-vanishing. We'll learn how to compute inverses for bigger matrices soon.   "
},
{
  "id": "subsec-definition-of-invertibility-11",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-definition-of-invertibility-11",
  "type": "Activity",
  "number": "2.5.3",
  "title": "",
  "body": "  Find the inverse of each matrix, if possible.         , so is not invertible.         , so .   "
},
{
  "id": "subsec-linear-systems-and-inverses-3",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-linear-systems-and-inverses-3",
  "type": "Activity",
  "number": "2.5.4",
  "title": "",
  "body": "  Solve the system using the inverse of .    Multiply both sides of by on the left:   Therefore, when is nonsingular, is the solution to .   "
},
{
  "id": "subsec-linear-systems-and-inverses-6",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-linear-systems-and-inverses-6",
  "type": "Activity",
  "number": "2.5.5",
  "title": "",
  "body": "  Suppose that . Use this information to calculate the following:                              "
},
{
  "id": "subsec-algorithm-for-calculating-inverses-3",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-algorithm-for-calculating-inverses-3",
  "type": "Activity",
  "number": "2.5.6",
  "title": "",
  "body": "  Describe the system of linear equations for finding the inverse.    We need to solve these systems:    "
},
{
  "id": "subsec-algorithm-for-calculating-inverses-5",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-algorithm-for-calculating-inverses-5",
  "type": "Activity",
  "number": "2.5.7",
  "title": "",
  "body": "  Write the augmented matrix for finding the inverse.      "
},
{
  "id": "subsec-algorithm-for-calculating-inverses-7",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-algorithm-for-calculating-inverses-7",
  "type": "Algorithm",
  "number": "2.5.8",
  "title": "Algorithm for Computing <span class=\"process-math\">\\(A^{-1}\\)<\/span>.",
  "body": " Algorithm for Computing    Set up the augmented matrix .  Apply elementary row operations to to reduce it to .   If is an matrix, either can be reduced to by elementary row operations or it cannot. In the first case, the algorithm produces ; in the second case, does not exist.   "
},
{
  "id": "subsec-algorithm-for-calculating-inverses-8",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-algorithm-for-calculating-inverses-8",
  "type": "Activity",
  "number": "2.5.8",
  "title": "",
  "body": "  Find where .    Start with :   Perform row operations:                            Therefore:    "
},
{
  "id": "subsec-algorithm-for-calculating-inverses-9",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-algorithm-for-calculating-inverses-9",
  "type": "Theorem",
  "number": "2.5.9",
  "title": "Box of Facts\/Invertibility Criteria.",
  "body": " Box of Facts\/Invertibility Criteria   Let be an matrix. The following are equivalent:   is nonsingular.  has only the trivial solution.  is row equivalent to .  The linear system has a unique solution for every matrix .  The rank of is .    "
},
{
  "id": "subsec-inverses-of-matrix-transformations-4",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-inverses-of-matrix-transformations-4",
  "type": "Activity",
  "number": "2.5.9",
  "title": "",
  "body": "  Compute the composition of and in both orders.    Let's examine the composition of and :   Similarly, for the reverse composition:    "
},
{
  "id": "subsec-inverses-of-matrix-transformations-5",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-inverses-of-matrix-transformations-5",
  "type": "Definition",
  "number": "2.5.10",
  "title": "",
  "body": "  Given a matrix transformation , if there exists a transformation such that for all , we say that has an inverse.   "
},
{
  "id": "subsec-inverses-of-matrix-transformations-6",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-inverses-of-matrix-transformations-6",
  "type": "Theorem",
  "number": "2.5.11",
  "title": "",
  "body": "  Let denote the matrix transformation induced by an matrix . Then:   is invertible if and only if has an inverse.  In this case, has exactly one inverse (which we denote as ), and is the transformation induced by the matrix .   In other words, .  and  reverse or undo the action of each other.   "
},
{
  "id": "subsec-inverses-of-matrix-transformations-7",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-inverses-of-matrix-transformations-7",
  "type": "Activity",
  "number": "2.5.10",
  "title": "",
  "body": "  Consider given by reflection across the -axis. Find the matrix representing this transformation, and find the inverse.    is given by matrix  Since , is its own inverse, so .   "
},
{
  "id": "subsec-inverses-of-matrix-transformations-8",
  "level": "2",
  "url": "sec-matrix-inverses.html#subsec-inverses-of-matrix-transformations-8",
  "type": "Activity",
  "number": "2.5.11",
  "title": "",
  "body": "  Consider the transformation defined by .    Is a matrix transformation? If so, find the matrix corresponding to .   Yes, is a matrix transformation. It can be represented by the matrix To verify:     Is an invertible transformation?   No, is not invertible. Note that , and so is not an invertible matrix, and so cannot be an invertible transformation.   "
},
{
  "id": "sec-cofactor-expansion",
  "level": "1",
  "url": "sec-cofactor-expansion.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Cofactor Expansion",
  "body": " The Cofactor Expansion   The Determinant of a General Matrix  In this section we consider square matrices. Our goal is to find a number, called the determinant that we can calculate for any matrix, which tells us whether or not the matrix is invertible.  Let's start with the case. Recall that in we defined the determinant of a matrix to be . It has the required properties of the determinant that we will now define for more general matrices.    Find the determinant of the following matrices:         .         .    We use the determinant to define the determinant. It will not be clear right now why this is the analogous function for matrices, but we'll explore that more later.   Matrix Minors   Let be a matrix. The minor of , denoted is the determinant of the matrix obtained from by deleting the th row and th column.  In general, if is , then the th minor of is the determinant of the matrix obtained from by deleting the th row and th column.      Suppose .    Calculate .    .    Calculate .    .     Cofactors of a Matrix   Let be a matrix. The -cofactor of , denoted , is defined as       Define     Compute .    .    Compute .    .     The Determinant of a Matrix   Let be a matrix. Then the determinant of , denoted , is calculated by picking a row (or column), and expanding along that row (column) by taking the product of each entry of that row (column) with it's cofactor, then adding these products together. The result will be the same regardless of which row or column you choose.  As an example, if we expand along the th row of a matrix then we find that .  The process of using cofactors to compute determinants is called calculating the determinant by cofactor expansion       Let .    Find the determinant of by expanding along row .   To calculate the determinant of by expanding along row , we write . We begin by calculating the cofactors:   Therefore .    Find the determinant of by expanding along column .   To calculate the determinant of by expanding along column , we write We calculate the cofactors:   . Therefore .      To track the sign when computing cofactors, it may be helpful to view the matrix as a checkerboard as below: The sign in the th row and th position with be the sign of .      Since the determinant is independent of the row or column you expand to compute a determinant, you should choose the row or column that results in the easiest calculation.      Compute the determinant of the following matrices:        The second row of has two zeroes, and so expanding along this row will likely result in the simplest computation of the determinant. We write .        If we expand the determinant of along it's first column, we find that .      Whenever a row or column of a matrix only has zeroes as entries, expanding along that row shows that the determinant of the matrix is always zero, so no cofactor computations are required.    Repeating this process allows for the computation of a general determinant.    Calculate the determinant of the matrix     Expansion along the third column of yields that      Determinant of a General Square Matrix   Let be a matrix ( ). Then the determinant of , denoted , is given by for some choice of row . Alternatively, one may perform a cofactor expansion along a column .      Compute , where .    Expanding in cofactors along column (because most of the entries of that row are zeroes), we find Expanding along the first column again, we find that . So .    Recall .   Triangular and Diagonal Matrices   An matrix is called upper triangular if for , and lower triangular if for . A matrix is diagonal if it is both upper triangular and lower triangular, i.e. if for . We denote the diagonal matrix with entries on the diagonal by .      If is a upper or lower triangular matrix, then . That is, the determinant of a triangular matrix is the product of entries in the main diagonal .    A generalization of the argument used to calculate , i.e. expanding the determinant in cofactors along the first column iteratively.      Properties of Determinants    If a row or column of a matrix consists entirely of zeroes, then .    A generalization of the argument used to calculate the determinant in .      If a matrix is obtained from a matrix by swapping two rows or two columns, then .      Check directly that is true when and are matrices.    If and , then and .      If two rows (or columns) of are equal to one another, then .    Let be the matrix obtained by swapping the two identical rows \/ columns of . Then , and implies that . Therefore , and thus that .      If is obtained from by multiplying each entry in a row or column of by a quantity , then .    Suppose that is obtained from by multiplying each entry of row by . Consider a cofactor expansion along row of . Then .      If is a matrix, then .      If is obtained by adding times the th row of to the th row, for , which is a row operation which we denote by , then .    We can check in the case. If and , then and .   How Row Operations Affect The Determinant   Here is a summary of how the elementary row operations, when applied to a matrix, affect the determinant:   Type I (scaling row\/column)  multiplies the determinant by .   Type II (interchange)  multiplies the determinant by .   Type III (replacement)  leaves the determinant unchanged.        Suppose a matrix is obtained from a matrix by applying the following row operations:           If , what is the determinant of .      multiplies the determinant by .  multiplies the determinant by .  does not change the determinant.  Therefore .      Compute the determinant of the matrix .    We use the elementary row operations to make the matrix triangular:                  None of the row operations we have performed change the determinant of the matrix, and the final matrix has determinant zero, so .     "
},
{
  "id": "sec-cofactor-expansion-2-4",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-2-4",
  "type": "Activity",
  "number": "3.1.1",
  "title": "",
  "body": "  Find the determinant of the following matrices:         .         .   "
},
{
  "id": "sec-cofactor-expansion-2-6",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-2-6",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Matrix Minors.",
  "body": " Matrix Minors   Let be a matrix. The minor of , denoted is the determinant of the matrix obtained from by deleting the th row and th column.  In general, if is , then the th minor of is the determinant of the matrix obtained from by deleting the th row and th column.   "
},
{
  "id": "sec-cofactor-expansion-2-7",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-2-7",
  "type": "Activity",
  "number": "3.1.2",
  "title": "",
  "body": "  Suppose .    Calculate .    .    Calculate .    .   "
},
{
  "id": "sec-cofactor-expansion-2-8",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-2-8",
  "type": "Definition",
  "number": "3.1.2",
  "title": "Cofactors of a Matrix.",
  "body": " Cofactors of a Matrix   Let be a matrix. The -cofactor of , denoted , is defined as    "
},
{
  "id": "sec-cofactor-expansion-2-9",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-2-9",
  "type": "Activity",
  "number": "3.1.3",
  "title": "",
  "body": "  Define     Compute .    .    Compute .    .   "
},
{
  "id": "sec-cofactor-expansion-2-10",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-2-10",
  "type": "Definition",
  "number": "3.1.3",
  "title": "The Determinant of a Matrix.",
  "body": " The Determinant of a Matrix   Let be a matrix. Then the determinant of , denoted , is calculated by picking a row (or column), and expanding along that row (column) by taking the product of each entry of that row (column) with it's cofactor, then adding these products together. The result will be the same regardless of which row or column you choose.  As an example, if we expand along the th row of a matrix then we find that .  The process of using cofactors to compute determinants is called calculating the determinant by cofactor expansion    "
},
{
  "id": "sec-cofactor-expansion-2-11",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-2-11",
  "type": "Activity",
  "number": "3.1.4",
  "title": "",
  "body": "  Let .    Find the determinant of by expanding along row .   To calculate the determinant of by expanding along row , we write . We begin by calculating the cofactors:   Therefore .    Find the determinant of by expanding along column .   To calculate the determinant of by expanding along column , we write We calculate the cofactors:   . Therefore .   "
},
{
  "id": "sec-cofactor-expansion-2-12",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-2-12",
  "type": "Note",
  "number": "3.1.4",
  "title": "",
  "body": "  To track the sign when computing cofactors, it may be helpful to view the matrix as a checkerboard as below: The sign in the th row and th position with be the sign of .   "
},
{
  "id": "sec-cofactor-expansion-2-13",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-2-13",
  "type": "Note",
  "number": "3.1.5",
  "title": "",
  "body": "  Since the determinant is independent of the row or column you expand to compute a determinant, you should choose the row or column that results in the easiest calculation.   "
},
{
  "id": "sec-cofactor-expansion-2-14",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-2-14",
  "type": "Activity",
  "number": "3.1.5",
  "title": "",
  "body": "  Compute the determinant of the following matrices:        The second row of has two zeroes, and so expanding along this row will likely result in the simplest computation of the determinant. We write .        If we expand the determinant of along it's first column, we find that .   "
},
{
  "id": "sec-cofactor-expansion-2-15",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-2-15",
  "type": "Note",
  "number": "3.1.6",
  "title": "",
  "body": "  Whenever a row or column of a matrix only has zeroes as entries, expanding along that row shows that the determinant of the matrix is always zero, so no cofactor computations are required.   "
},
{
  "id": "sec-cofactor-expansion-2-17",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-2-17",
  "type": "Activity",
  "number": "3.1.6",
  "title": "",
  "body": "  Calculate the determinant of the matrix     Expansion along the third column of yields that    "
},
{
  "id": "sec-cofactor-expansion-2-18",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-2-18",
  "type": "Definition",
  "number": "3.1.7",
  "title": "Determinant of a General Square Matrix.",
  "body": " Determinant of a General Square Matrix   Let be a matrix ( ). Then the determinant of , denoted , is given by for some choice of row . Alternatively, one may perform a cofactor expansion along a column .   "
},
{
  "id": "act-3-1-expansion-of-upper-triangular",
  "level": "2",
  "url": "sec-cofactor-expansion.html#act-3-1-expansion-of-upper-triangular",
  "type": "Activity",
  "number": "3.1.7",
  "title": "",
  "body": "  Compute , where .    Expanding in cofactors along column (because most of the entries of that row are zeroes), we find Expanding along the first column again, we find that . So .   "
},
{
  "id": "def-4-1-triangular-matrices",
  "level": "2",
  "url": "sec-cofactor-expansion.html#def-4-1-triangular-matrices",
  "type": "Definition",
  "number": "3.1.8",
  "title": "Triangular and Diagonal Matrices.",
  "body": " Triangular and Diagonal Matrices   An matrix is called upper triangular if for , and lower triangular if for . A matrix is diagonal if it is both upper triangular and lower triangular, i.e. if for . We denote the diagonal matrix with entries on the diagonal by .   "
},
{
  "id": "sec-cofactor-expansion-2-22",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-2-22",
  "type": "Theorem",
  "number": "3.1.9",
  "title": "",
  "body": "  If is a upper or lower triangular matrix, then . That is, the determinant of a triangular matrix is the product of entries in the main diagonal .    A generalization of the argument used to calculate , i.e. expanding the determinant in cofactors along the first column iteratively.   "
},
{
  "id": "sec-cofactor-expansion-3-2",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-3-2",
  "type": "Theorem",
  "number": "3.1.10",
  "title": "",
  "body": "  If a row or column of a matrix consists entirely of zeroes, then .    A generalization of the argument used to calculate the determinant in .   "
},
{
  "id": "thm-3-1-swapping-rows-determinant",
  "level": "2",
  "url": "sec-cofactor-expansion.html#thm-3-1-swapping-rows-determinant",
  "type": "Theorem",
  "number": "3.1.11",
  "title": "",
  "body": "  If a matrix is obtained from a matrix by swapping two rows or two columns, then .   "
},
{
  "id": "sec-cofactor-expansion-3-4",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-3-4",
  "type": "Activity",
  "number": "3.1.8",
  "title": "",
  "body": "  Check directly that is true when and are matrices.    If and , then and .   "
},
{
  "id": "sec-cofactor-expansion-3-5",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-3-5",
  "type": "Theorem",
  "number": "3.1.12",
  "title": "",
  "body": "  If two rows (or columns) of are equal to one another, then .    Let be the matrix obtained by swapping the two identical rows \/ columns of . Then , and implies that . Therefore , and thus that .   "
},
{
  "id": "sec-cofactor-expansion-3-6",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-3-6",
  "type": "Theorem",
  "number": "3.1.13",
  "title": "",
  "body": "  If is obtained from by multiplying each entry in a row or column of by a quantity , then .    Suppose that is obtained from by multiplying each entry of row by . Consider a cofactor expansion along row of . Then .   "
},
{
  "id": "sec-cofactor-expansion-3-7",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-3-7",
  "type": "Fact",
  "number": "3.1.14",
  "title": "",
  "body": "  If is a matrix, then .   "
},
{
  "id": "thm-3-1-row-operation-determinant",
  "level": "2",
  "url": "sec-cofactor-expansion.html#thm-3-1-row-operation-determinant",
  "type": "Theorem",
  "number": "3.1.15",
  "title": "",
  "body": "  If is obtained by adding times the th row of to the th row, for , which is a row operation which we denote by , then .   "
},
{
  "id": "sec-cofactor-expansion-3-10",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-3-10",
  "type": "Theorem",
  "number": "3.1.16",
  "title": "How Row Operations Affect The Determinant.",
  "body": " How Row Operations Affect The Determinant   Here is a summary of how the elementary row operations, when applied to a matrix, affect the determinant:   Type I (scaling row\/column)  multiplies the determinant by .   Type II (interchange)  multiplies the determinant by .   Type III (replacement)  leaves the determinant unchanged.     "
},
{
  "id": "sec-cofactor-expansion-3-11",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-3-11",
  "type": "Activity",
  "number": "3.1.9",
  "title": "",
  "body": "  Suppose a matrix is obtained from a matrix by applying the following row operations:           If , what is the determinant of .      multiplies the determinant by .  multiplies the determinant by .  does not change the determinant.  Therefore .   "
},
{
  "id": "sec-cofactor-expansion-3-12",
  "level": "2",
  "url": "sec-cofactor-expansion.html#sec-cofactor-expansion-3-12",
  "type": "Activity",
  "number": "3.1.10",
  "title": "",
  "body": "  Compute the determinant of the matrix .    We use the elementary row operations to make the matrix triangular:                  None of the row operations we have performed change the determinant of the matrix, and the final matrix has determinant zero, so .   "
},
{
  "id": "sec-determinants-and-matrix-inverses",
  "level": "1",
  "url": "sec-determinants-and-matrix-inverses.html",
  "type": "Section",
  "number": "3.2",
  "title": "Determinants and Matrix Inverses",
  "body": " Determinants and Matrix Inverses    If and are matrices, then .      Let .    Compute the determinant of , , and .   We use the formula for matrices: First, that , then that , and that .    Compute the determinant of and .   Using , we calculate that , and that . Alternatively, we can calculate the products of the matrices, i.e. that and that , and calculate the determinants directly.      If is a matrix, then is nonsingular if and only if . In this case .    We prove only one direction of the theorem, that if is nonsingular then and . Suppose that is non-singular. Then . Taking determinants of both sides, and using that is diagonal, so that , we see that . Thus (since otherwise the right hand side of this equation would be zero), and rearranging gives .      If is a square matrix, then .     Orthogonal Matrices   A square matrix is orthogonal if .      If is an orthogonal matrix, what are the possible values of ?    If is orthogonal, then applying the determinant to both sides of the equation gives . Taking square roots gives that .    "
},
{
  "id": "thm-3-2-product-determinant",
  "level": "2",
  "url": "sec-determinants-and-matrix-inverses.html#thm-3-2-product-determinant",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "",
  "body": "  If and are matrices, then .   "
},
{
  "id": "sec-determinants-and-matrix-inverses-3",
  "level": "2",
  "url": "sec-determinants-and-matrix-inverses.html#sec-determinants-and-matrix-inverses-3",
  "type": "Activity",
  "number": "3.2.1",
  "title": "",
  "body": "  Let .    Compute the determinant of , , and .   We use the formula for matrices: First, that , then that , and that .    Compute the determinant of and .   Using , we calculate that , and that . Alternatively, we can calculate the products of the matrices, i.e. that and that , and calculate the determinants directly.   "
},
{
  "id": "sec-determinants-and-matrix-inverses-4",
  "level": "2",
  "url": "sec-determinants-and-matrix-inverses.html#sec-determinants-and-matrix-inverses-4",
  "type": "Theorem",
  "number": "3.2.2",
  "title": "",
  "body": "  If is a matrix, then is nonsingular if and only if . In this case .    We prove only one direction of the theorem, that if is nonsingular then and . Suppose that is non-singular. Then . Taking determinants of both sides, and using that is diagonal, so that , we see that . Thus (since otherwise the right hand side of this equation would be zero), and rearranging gives .   "
},
{
  "id": "sec-determinants-and-matrix-inverses-5",
  "level": "2",
  "url": "sec-determinants-and-matrix-inverses.html#sec-determinants-and-matrix-inverses-5",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "",
  "body": "  If is a square matrix, then .   "
},
{
  "id": "def-4-2-orthogonal",
  "level": "2",
  "url": "sec-determinants-and-matrix-inverses.html#def-4-2-orthogonal",
  "type": "Definition",
  "number": "3.2.4",
  "title": "Orthogonal Matrices.",
  "body": " Orthogonal Matrices   A square matrix is orthogonal if .   "
},
{
  "id": "sec-determinants-and-matrix-inverses-7",
  "level": "2",
  "url": "sec-determinants-and-matrix-inverses.html#sec-determinants-and-matrix-inverses-7",
  "type": "Activity",
  "number": "3.2.2",
  "title": "",
  "body": "  If is an orthogonal matrix, what are the possible values of ?    If is orthogonal, then applying the determinant to both sides of the equation gives . Taking square roots gives that .   "
},
{
  "id": "sec-subspaces-and-spanning",
  "level": "1",
  "url": "sec-subspaces-and-spanning.html",
  "type": "Section",
  "number": "4.1",
  "title": "Subspaces and Spanning",
  "body": " Subspaces and Spanning   Subspaces  Recall the definition of the set in .  We are already familiar with geometric spaces living inside bigger ones, like lines lying in the plane, or planes lying in 3-space. We are now going to formalize this notion algebraically:   Subspaces   A set of vectors in is called a subspace of if it satisfies the following properties:  The zero vector (written as ) is in .  If is in and is in , then is in This means is closed under addition .  If is in , then is in for every scalar . This means is closed under scalar multiplication .       The whole set is a subspace of itself.     The set containing only the zero vector, i.e. the set , is a subspace of (called the trivial subspace or zero subspace ).      Verify that is a subspace of .    To verify that , we must verify three properties:   Contains the zero vector: The zero is evidently an element of .   Closure under addition: If , then and , so , which is an element of .   Closure under scalar multiplication: If and is a scalar, then , and is in .  Since satisfies all three of the necessary conditions, it is a subspace.     Proper Subspaces   Any subspace of other than or is a proper subspace of .      Planes and lines through the origin in are all subspaces of .      Verify that planes through the origin in are all proper subspaces of .   Let be a plane through the origin. Then there exists scalars , not all zero, such that is the set of points satisfying the equation . The vector is a normal vector for the plane, and we can write as the set of vectors such that .  Let us verify that satisfies the conditions to be a subspace:   Contains the zero vector  because .    Closure under addition  If and then to verify we must argue that . Indeed, .    Closure under scalar multiplication  If , and is a scalar, to verify we must argue that . Indeed, .   We have verified the three properties required for to be a subspace.    Verify that lines through the origin in are subspaces of .   Let be a line through the origin in . If has direction vector , then , i.e. the line consists of all scalar multiples of .  Let us verify that satisfies the conditions to be a subspace:   Contains the zero vector  because .    Closure under addition  Suppose and . Then and are both scalar multiples of , i.e. and . Then . Thus is a scalar multiple of , and so .    Closure under scalar multiplication  If , and is a scalar, then we may write , and then . So a scalar multiple of , and thus .   We have verified the three properties required for to be a subspace.      Lines and planes which do not pass through the origin in are not subspaces of . Nonetheless, if is a plane, and we consider the set of displacement vectors , then forms a plane passing through the origin, and so is a subspace of . A similar result holds for sets of displacement vectors given by a line not passing through the origin.      Show that the set is not a subspace of .    It suffices to show one of the conditions required to be a subspace does not hold.  does contain the zero vector, and closed under scalar multiplication. But  is not closed under addition. Define . Then and . But is not in , since . Since fails to be closed under addition, it is not a subspace of .      Let be the set of all vectors in of the form , where . Is a proper subspace of ?    We check whether the required properties hold in order to be a subspace:   Contains the zero vector: The zero vector is in , since when and .   Closed under addition: If Then , where and . Thus .   Closed under scalar multiplication: If , and is a scalar, then , with and . Thus .  Thus is a subspace of .  To check that is a proper subspace of , we must show that and . The vector is not in , since if it were of the form , then and , and the third entry would have to be . Thus does not contain every vector, and thus cannot be equal to . But it also contains some non-zero vectors, such as , and so .  Thus is a proper subspace of .     To show a set is a subspace, you tend to need to parameterize all elements of the set in order to show they all satisfy some property (closure under addition or scalar multiplication), and so your argument should use variables. To show a set is not a subspace, you need to find counterexamples that shows that some property does not hold for all elements, and so your argument should pick explicit examples of when a property does not hold (and so your argument should not use variables).     Null Space and Image Space The following two important examples are representative of two canonical ways of describing a subspace.  The Null Space and Image Space   Let be a matrix. The null space of , denoted , is the set of vectors in which are solutions to the equation , i.e. . The image space of , denoted , is the set of vectors in such that has a solution, i.e. .      For any matrix, the null space of is a subspace of , and the image space of is a subspace of .    We start by showing the null space of is a subspace. Recall the properties discussed in :   Contains the zero vector  because .    Closure under addition  Suppose and . Then and . So . Thus .    Closure under scalar multiplication  If , and is a scalar, then . Thus .   So is a subspace of .  Next, we show that is a subspace.   Contains the zero vector  because .    Closure under addition  Suppose and . Then the equations and both have solutions, i.e. there exists and such that and . Then , so the equation has a solution, and so .    Closure under scalar multiplication  If , and is a scalar, then we may write for some . But then , so the equation has a solution, so that .   Thus is a subspace of .      Spanning Sets  Even though subspaces of can have infinitely many vectors, it is possible to represent them with a finite amount of data. Recall the notion of a linear combination of vectors from .    Show that there are two vectors (describe them explicitly), so that every vector in the set discussed in can be written as the linear combination of those two vectors.    We may write . Thus every vector in can be written as a linear combination of .     The Span of a Set of Vectors   The set of all linear combinations of a set of vectors is called the span of the vectors , and is denoted . If , we say that is spanned by the vectors , and that the vectors  span the space .      Let be a set in . Then   is a subspace of containing each of the vecotrs .  If is a subspace of and each of the vectors is in , then is a subset of , i.e. .      Define an matrix , with the vectors as columns. Then , and is thus a subspace of . Since for , the set contains each of the vectors .  Conversely, suppose is a subspace of and . Since is closed under addition and scalar multiplication, all of the linear combinations of are elements of , and so .      Recall the standard basis of from . Note that if , then . This means that .      In , consider the two vectors . Determine if the vector belongs to .    We need to determine if is a linear combination of the vectors and , i.e. if it is possible to find scalars and such that . Comparing entries of the vectors in each side of the equation, we obtain a system of equations in and , i.e. It now suffices to determine if this system has a solution. We could use the methods we developed in to solve this system, but since there are only two variables we can get by more elementary methods.  The only values of and that satisfy the first pair of equations are and . And these values also satisfy the third equation. Thus , and so  does belong to the span of and .      Find a spanning set for the null space of the matrix .    To solve this problem, we begin by finding the basic solutions to the linear system , where . Using the Gaussian elimination algorithm, we row reduce: The free variables are and . Setting and , we obtain that 0 when and . Thus a general solution to this equation is given by . Thus the null space is spanned by .      Find a spanning set for the image space of the matrix .    We note that . Thus the image space of is spanned by it's columns, i.e. .    To summarize these activities, the basic solutions of the equation form a spanning set for the null space of , and the columns of form a spanning set for the image space of .    Are these sets minimal ? Can we get away with fewer vectors in the spanning set?     "
},
{
  "id": "def-5-1-subspaces",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#def-5-1-subspaces",
  "type": "Definition",
  "number": "4.1.1",
  "title": "Subspaces.",
  "body": " Subspaces   A set of vectors in is called a subspace of if it satisfies the following properties:  The zero vector (written as ) is in .  If is in and is in , then is in This means is closed under addition .  If is in , then is in for every scalar . This means is closed under scalar multiplication .     "
},
{
  "id": "sec-subspaces-and-spanning-2-5",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-2-5",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": " The whole set is a subspace of itself.  "
},
{
  "id": "sec-subspaces-and-spanning-2-6",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-2-6",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "  The set containing only the zero vector, i.e. the set , is a subspace of (called the trivial subspace or zero subspace ).   "
},
{
  "id": "sec-subspaces-and-spanning-2-7",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-2-7",
  "type": "Activity",
  "number": "4.1.1",
  "title": "",
  "body": "  Verify that is a subspace of .    To verify that , we must verify three properties:   Contains the zero vector: The zero is evidently an element of .   Closure under addition: If , then and , so , which is an element of .   Closure under scalar multiplication: If and is a scalar, then , and is in .  Since satisfies all three of the necessary conditions, it is a subspace.   "
},
{
  "id": "sec-subspaces-and-spanning-2-8",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-2-8",
  "type": "Definition",
  "number": "4.1.4",
  "title": "Proper Subspaces.",
  "body": " Proper Subspaces   Any subspace of other than or is a proper subspace of .   "
},
{
  "id": "sec-subspaces-and-spanning-2-9",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-2-9",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": "  Planes and lines through the origin in are all subspaces of .   "
},
{
  "id": "sec-subspaces-and-spanning-2-10",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-2-10",
  "type": "Activity",
  "number": "4.1.2",
  "title": "",
  "body": "  Verify that planes through the origin in are all proper subspaces of .   Let be a plane through the origin. Then there exists scalars , not all zero, such that is the set of points satisfying the equation . The vector is a normal vector for the plane, and we can write as the set of vectors such that .  Let us verify that satisfies the conditions to be a subspace:   Contains the zero vector  because .    Closure under addition  If and then to verify we must argue that . Indeed, .    Closure under scalar multiplication  If , and is a scalar, to verify we must argue that . Indeed, .   We have verified the three properties required for to be a subspace.    Verify that lines through the origin in are subspaces of .   Let be a line through the origin in . If has direction vector , then , i.e. the line consists of all scalar multiples of .  Let us verify that satisfies the conditions to be a subspace:   Contains the zero vector  because .    Closure under addition  Suppose and . Then and are both scalar multiples of , i.e. and . Then . Thus is a scalar multiple of , and so .    Closure under scalar multiplication  If , and is a scalar, then we may write , and then . So a scalar multiple of , and thus .   We have verified the three properties required for to be a subspace.   "
},
{
  "id": "sec-subspaces-and-spanning-2-11",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-2-11",
  "type": "Note",
  "number": "4.1.6",
  "title": "",
  "body": "  Lines and planes which do not pass through the origin in are not subspaces of . Nonetheless, if is a plane, and we consider the set of displacement vectors , then forms a plane passing through the origin, and so is a subspace of . A similar result holds for sets of displacement vectors given by a line not passing through the origin.   "
},
{
  "id": "sec-subspaces-and-spanning-2-12",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-2-12",
  "type": "Activity",
  "number": "4.1.3",
  "title": "",
  "body": "  Show that the set is not a subspace of .    It suffices to show one of the conditions required to be a subspace does not hold.  does contain the zero vector, and closed under scalar multiplication. But  is not closed under addition. Define . Then and . But is not in , since . Since fails to be closed under addition, it is not a subspace of .   "
},
{
  "id": "act-5-1-W-proper-subspace",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#act-5-1-W-proper-subspace",
  "type": "Activity",
  "number": "4.1.4",
  "title": "",
  "body": "  Let be the set of all vectors in of the form , where . Is a proper subspace of ?    We check whether the required properties hold in order to be a subspace:   Contains the zero vector: The zero vector is in , since when and .   Closed under addition: If Then , where and . Thus .   Closed under scalar multiplication: If , and is a scalar, then , with and . Thus .  Thus is a subspace of .  To check that is a proper subspace of , we must show that and . The vector is not in , since if it were of the form , then and , and the third entry would have to be . Thus does not contain every vector, and thus cannot be equal to . But it also contains some non-zero vectors, such as , and so .  Thus is a proper subspace of .   "
},
{
  "id": "sec-subspaces-and-spanning-2-14",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-2-14",
  "type": "Note",
  "number": "4.1.7",
  "title": "",
  "body": " To show a set is a subspace, you tend to need to parameterize all elements of the set in order to show they all satisfy some property (closure under addition or scalar multiplication), and so your argument should use variables. To show a set is not a subspace, you need to find counterexamples that shows that some property does not hold for all elements, and so your argument should pick explicit examples of when a property does not hold (and so your argument should not use variables).  "
},
{
  "id": "def-5-1-null-and-image-space-of-matrix",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#def-5-1-null-and-image-space-of-matrix",
  "type": "Definition",
  "number": "4.1.8",
  "title": "The Null Space and Image Space.",
  "body": " The Null Space and Image Space   Let be a matrix. The null space of , denoted , is the set of vectors in which are solutions to the equation , i.e. . The image space of , denoted , is the set of vectors in such that has a solution, i.e. .   "
},
{
  "id": "thm-5-1-null-space-is-a-space",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#thm-5-1-null-space-is-a-space",
  "type": "Theorem",
  "number": "4.1.9",
  "title": "",
  "body": "  For any matrix, the null space of is a subspace of , and the image space of is a subspace of .    We start by showing the null space of is a subspace. Recall the properties discussed in :   Contains the zero vector  because .    Closure under addition  Suppose and . Then and . So . Thus .    Closure under scalar multiplication  If , and is a scalar, then . Thus .   So is a subspace of .  Next, we show that is a subspace.   Contains the zero vector  because .    Closure under addition  Suppose and . Then the equations and both have solutions, i.e. there exists and such that and . Then , so the equation has a solution, and so .    Closure under scalar multiplication  If , and is a scalar, then we may write for some . But then , so the equation has a solution, so that .   Thus is a subspace of .   "
},
{
  "id": "act-5-1-W-Span",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#act-5-1-W-Span",
  "type": "Activity",
  "number": "4.1.5",
  "title": "",
  "body": "  Show that there are two vectors (describe them explicitly), so that every vector in the set discussed in can be written as the linear combination of those two vectors.    We may write . Thus every vector in can be written as a linear combination of .   "
},
{
  "id": "sec-subspaces-and-spanning-4-4",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-4-4",
  "type": "Definition",
  "number": "4.1.10",
  "title": "The Span of a Set of Vectors.",
  "body": " The Span of a Set of Vectors   The set of all linear combinations of a set of vectors is called the span of the vectors , and is denoted . If , we say that is spanned by the vectors , and that the vectors  span the space .   "
},
{
  "id": "sec-subspaces-and-spanning-4-5",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-4-5",
  "type": "Theorem",
  "number": "4.1.11",
  "title": "",
  "body": "  Let be a set in . Then   is a subspace of containing each of the vecotrs .  If is a subspace of and each of the vectors is in , then is a subset of , i.e. .      Define an matrix , with the vectors as columns. Then , and is thus a subspace of . Since for , the set contains each of the vectors .  Conversely, suppose is a subspace of and . Since is closed under addition and scalar multiplication, all of the linear combinations of are elements of , and so .   "
},
{
  "id": "sec-subspaces-and-spanning-4-6",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-4-6",
  "type": "Example",
  "number": "4.1.12",
  "title": "",
  "body": "  Recall the standard basis of from . Note that if , then . This means that .   "
},
{
  "id": "sec-subspaces-and-spanning-4-7",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-4-7",
  "type": "Activity",
  "number": "4.1.6",
  "title": "",
  "body": "  In , consider the two vectors . Determine if the vector belongs to .    We need to determine if is a linear combination of the vectors and , i.e. if it is possible to find scalars and such that . Comparing entries of the vectors in each side of the equation, we obtain a system of equations in and , i.e. It now suffices to determine if this system has a solution. We could use the methods we developed in to solve this system, but since there are only two variables we can get by more elementary methods.  The only values of and that satisfy the first pair of equations are and . And these values also satisfy the third equation. Thus , and so  does belong to the span of and .   "
},
{
  "id": "sec-subspaces-and-spanning-4-8",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-4-8",
  "type": "Activity",
  "number": "4.1.7",
  "title": "",
  "body": "  Find a spanning set for the null space of the matrix .    To solve this problem, we begin by finding the basic solutions to the linear system , where . Using the Gaussian elimination algorithm, we row reduce: The free variables are and . Setting and , we obtain that 0 when and . Thus a general solution to this equation is given by . Thus the null space is spanned by .   "
},
{
  "id": "sec-subspaces-and-spanning-4-9",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-4-9",
  "type": "Activity",
  "number": "4.1.8",
  "title": "",
  "body": "  Find a spanning set for the image space of the matrix .    We note that . Thus the image space of is spanned by it's columns, i.e. .   "
},
{
  "id": "sec-subspaces-and-spanning-4-11",
  "level": "2",
  "url": "sec-subspaces-and-spanning.html#sec-subspaces-and-spanning-4-11",
  "type": "Note",
  "number": "4.1.13",
  "title": "",
  "body": "  Are these sets minimal ? Can we get away with fewer vectors in the spanning set?   "
},
{
  "id": "sec-independence-and-dimension",
  "level": "1",
  "url": "sec-independence-and-dimension.html",
  "type": "Section",
  "number": "4.2",
  "title": "Independence and Dimension",
  "body": " Independence and Dimension   Linear Independence    In we showed that the set . In , we showed that the set is a spanning set for . The set also spans . But why is  better ?    It uses fewer vectors to span the same space.    A subspace has many different spanning sets. We use the concept of linear independence to determine when sets of spanning vectors are the most efficient .   Linear Independence   A set of vectors in is said to be linearly independent , or simply independent if the only solution to the equation is trivial, i.e. .  A set of vectors in is linearly dependent if it is not linearly independent, i.e. if there exists scalars , not all zero, such that .      Determine whether the vectors are linearly independent.    We need to determine the solutions to the equation . Expanding out this equation gives the system . We solve this homogeneous system of linear equations using the Gaussian elimination algorithm. First we create the augmented matrix We reduce the matrix using row operations to row echelon form: There are two free variables corresponding to this matrix, which implies that there are two basic solutions to the equation, and thus the system has a non-trivial solution. Thus the vectors are not linearly independent.    The last example demonstrates an algorithm to verify whether a given set of vectors is linearly indendent.   A Test of Independence   To verify if a set are linearly independent:  Consider the system of linear equations .  Solve the resulting linear homogeneous solution.  If there is a non-trivial solution to the equation, then the vectors are linearly dependent. Otherwise, the vectors are linearly independent.        If is a linearly independent set of vectors in , then every vector in their span has a unique representation as a linear combination of the .    Let be an element of . If the equation had another solution, i.e. , then subtracting one equation from the other gives that . Thus the coefficients give a solution to the equation . But the vectors are linearly independent, and so this equation has only a trivial solution. Thus , i.e. , proving that the representation of as a linear combination is unique.      Determine whether the vectors are linearly independent.    We must check if the equation has nontrivial solutions. Expanding out this equation gives the system We could use row-reduction here, though in this case a more ad-hoc approach is more efficient. The third equation gives , and once this is deduced the fourth equation gives . Then the first equation gives . Thus the only solution to the equation is the trivial solution, and so the vectors are linearly independent.      Is the set linearly independent?    Does the equation have a non-trivial solution?      The nonzero rows of a matrix in row echelon form are linearly independent.      Connection to Invertibility Criteria  Consider a set of vectors in , and let be the matrix whose columns are the vectors .  Note that are linearly independent precisely when the equation has only the trivial solution.  Note that additionally, exactly when has a solution for all in .  We use these facts to extend our invertibility criteria for matrices.   Invertibility Criteria   Let be a matrix. Then the following are equivalent:   is invertible.  The columns of are linearly independent.  The columns of span .  The rows of are linearly independent.  The rows of span the set of all rows (think of this as .        Let , where . Is linearly dependent?    Because of , it suffices to check that the matrix is invertible, and we can do this by verifying that . Using a cofactor expansion along the first row, we verify that .      If and are nonzero vectors in , show that is dependent if and only if and are parallel, i.e. if one vector is a scalar multiple of the other.    If and are parallel, then one is a scalar multiple of the other, say for some scalar . Then , which is a non-trivial linear combination of and , so is dependent.  Conversely, if is dependent, then for some scalars and , where or . If, say, , then , so and are parallel. A similar argument works if .      Let , and are non-zero vectors in , where is independent. Show that is independent if and only if is not in the subspace . See and .   independent.       dependent.        If is independent, suppose that is in , say, that for some scalars and . Then . Thus a non-trivial linear combination of , and is equal to zero, contradicting the independent of .  On the other hand, suppose is not in . We need to show that is independent. If , where , , and are not all zero, then , for otherwise , which contradicts the independence of . But then , which contradicts that is not in .      More generally, if are a linearly independent set of vectors in , and is another vector in , then is a linearly independent set if and only if is not contained in the span of the set .      Prove that a matrix has linearly independent columns if and only if is invertible.    Suppose that the columns of are linearly independent. We must show that is invertible, which is true if and only if the only solution to the equation only has the trivial solution. So suppose . Then . Recalling , if we let , then . But the only vector such that is the zero vector, because if , then , and the only way this quantity can be equal to zero is if , and thus that . Thus . But because the columns of are linearly independent, the only solution to is . Therefore we have proved that is invertible.  Conversely, suppose that is invertible. To show has linearly independent columns, it suffices to show that the equation has only the trivial solution. But if is any such solution, then . Since is invertible, this can only be true if . Thus only the trivial solution exists.      Basis and Dimension  In geometry, we often describe lines as being -dimensional , and planes as being -dimensional . We can describe the notion of dimension more precisely using linear algebra.   A Fundamental Theorem   Let be a subspace of . If is spanned by vectors, and if contains linearly independent vectors, then .      Is it possible to have linearly independent vectors in ?    It is not possible. is spanned by vectors (for example, the standard basis vectors), so by , any linearly independent subset of must contain at most vectors.     Bases of Vector Spaces   If is a subspace of , a set of vectors in is called a basis of if it satisfies the following two conditions:   is linearly independent .   .       The Invariance Theorem   If and are both bases for a subspace of , then .     says that, even though a subspace has many different bases, all bases must have the same number of vectors.   Dimensions of Vector Spaces   The dimension of a non-zero subspace of is the number of vectors in a basis for . We often write for the dimension of , and if , we say is -dimensional. By convention, the dimension of the trivial subspace is zero .      What is the dimension of ?   The standard basis for is a basis, i.e. the set of three vectors defined in is linearly independent and spans . Thus has dimension .    What is the dimension of ?   The standard basis for is a basis, and is a set of four vectors, so .    What is the dimension of ?   The standard basis is a basis for , so .      Find the dimension of the space .    The set is a basis for since is linearly independent (neither vector in is the scalar multiple of the other). In the solution to , we showed that these vectors span , so is a basis for . Since contains two vectors, .      Let be a non-zero subspace of . Then   has a basis and .  Any independent set in can be enlarged (by adding some subset of vectors in any fixed basis) to obtain a basis of .  Any spanning set for contains a subset of vectors which form a basis for .        Let be a subspace of where and let be a set of vectors in . Then is linearly independent if and only if spans .    Suppose is linearly independent and , then by , one cannot add any new vectors to the set and remain linearly independent. But says that if is not already a spanning set for , one can add new vectors to from , and remain linearly independent. Thus must be a basis.  Conversely, if spans , then by we can choose a subset of which is a basis for . But any proper subset of contains fewer than vectors, and thus by , cannot be a basis for . Thus is the only subset of itself that can be a bais, and because must contain a basis, the set must itself be a basis.      Let and be subspaces of with . Then:   .  If , then .        Find a basis for that contains the two vectors .    Since is four dimensional, we must find two vectors and such that the vectors is linearly independent. states that we can choose these vectors from any basis, so we might as well choose them from the standard basis .  One strategy is to choose one vector not contained in the span of the set , and then choose a vector not contained in the span of the set . By , the set .  The vector is not contained in the span of the set , since the second entry in any linear combination of the vectors and is equal to zero, and thus the vector cannot be equal to .  We also claim that the vector is not contained in the span of the set . If , then checking each entry, we get the system of linear equations The first and forth equations immediately contradict one another, so such a system cannot be solved.  Thus is a basis for .      Bases and Coordinate Systems  One way to think of a basis is as providing a coordinate system for a subspace. The uniquely determinied coefficients in the linear combination of a vector in the subspace are the coordinates.   Ordered Bases of a Subspace   Let be a basis of the subspace . We call the tuple an ordered basis of .    As an example, and are two different ordered bases of . The two sets and , and so describe the same bases of .    Many Linear Algebra textbooks, including Linear Algebra With Applications, Nicholson write ordered bases using set notation , despite the order in which the basis elements appear being important. We use tuple notation to emphasize the importance of the order.    Given an ordered basis for an -dimensional subspace of , and any vector , we can describe it's coordinates with respect to the basis , identifying with a vector in .   Coordinate Vectors With Respect to a Basis   Let be an -dimensional subspace of , and let be an ordered basis for . Given any vector , there exists unique scalars such that and we define the coordinate vector of a vector with respect to to be the -vector . See for an illustration of this concept, taken from Stanford's MATH 51 Textbook .      If is an ordered basis for a subspace , then , where is the th standard basis vector in .     A parallelelogram grid constructed from a basis for . The points lying at the intersection of lines on the grid are precisely those vectors where the entries of the vector are integers.        Let be an ordered basis for , where . What is if .    We need to find scalars , and such that . Comparing entries of the vectors gives a system of three equations, i.e. Using back substitution, we find that , , and are the unique solution to this system. Thus .     "
},
{
  "id": "sec-independence-and-dimension-2-2",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-2-2",
  "type": "Activity",
  "number": "4.2.1",
  "title": "",
  "body": "  In we showed that the set . In , we showed that the set is a spanning set for . The set also spans . But why is  better ?    It uses fewer vectors to span the same space.   "
},
{
  "id": "def-5-2-linear-indepdendence",
  "level": "2",
  "url": "sec-independence-and-dimension.html#def-5-2-linear-indepdendence",
  "type": "Definition",
  "number": "4.2.1",
  "title": "Linear Independence.",
  "body": " Linear Independence   A set of vectors in is said to be linearly independent , or simply independent if the only solution to the equation is trivial, i.e. .  A set of vectors in is linearly dependent if it is not linearly independent, i.e. if there exists scalars , not all zero, such that .   "
},
{
  "id": "sec-independence-and-dimension-2-5",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-2-5",
  "type": "Activity",
  "number": "4.2.2",
  "title": "",
  "body": "  Determine whether the vectors are linearly independent.    We need to determine the solutions to the equation . Expanding out this equation gives the system . We solve this homogeneous system of linear equations using the Gaussian elimination algorithm. First we create the augmented matrix We reduce the matrix using row operations to row echelon form: There are two free variables corresponding to this matrix, which implies that there are two basic solutions to the equation, and thus the system has a non-trivial solution. Thus the vectors are not linearly independent.   "
},
{
  "id": "sec-independence-and-dimension-2-7",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-2-7",
  "type": "Algorithm",
  "number": "4.2.2",
  "title": "A Test of Independence.",
  "body": " A Test of Independence   To verify if a set are linearly independent:  Consider the system of linear equations .  Solve the resulting linear homogeneous solution.  If there is a non-trivial solution to the equation, then the vectors are linearly dependent. Otherwise, the vectors are linearly independent.     "
},
{
  "id": "sec-independence-and-dimension-2-8",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-2-8",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "",
  "body": "  If is a linearly independent set of vectors in , then every vector in their span has a unique representation as a linear combination of the .    Let be an element of . If the equation had another solution, i.e. , then subtracting one equation from the other gives that . Thus the coefficients give a solution to the equation . But the vectors are linearly independent, and so this equation has only a trivial solution. Thus , i.e. , proving that the representation of as a linear combination is unique.   "
},
{
  "id": "sec-independence-and-dimension-2-9",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-2-9",
  "type": "Activity",
  "number": "4.2.3",
  "title": "",
  "body": "  Determine whether the vectors are linearly independent.    We must check if the equation has nontrivial solutions. Expanding out this equation gives the system We could use row-reduction here, though in this case a more ad-hoc approach is more efficient. The third equation gives , and once this is deduced the fourth equation gives . Then the first equation gives . Thus the only solution to the equation is the trivial solution, and so the vectors are linearly independent.   "
},
{
  "id": "sec-independence-and-dimension-2-10",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-2-10",
  "type": "Activity",
  "number": "4.2.4",
  "title": "",
  "body": "  Is the set linearly independent?    Does the equation have a non-trivial solution?   "
},
{
  "id": "fact-5-2-rows-in-row-echelon-independent",
  "level": "2",
  "url": "sec-independence-and-dimension.html#fact-5-2-rows-in-row-echelon-independent",
  "type": "Fact",
  "number": "4.2.4",
  "title": "",
  "body": "  The nonzero rows of a matrix in row echelon form are linearly independent.   "
},
{
  "id": "fact-5-2-invertibility-criteria",
  "level": "2",
  "url": "sec-independence-and-dimension.html#fact-5-2-invertibility-criteria",
  "type": "Fact",
  "number": "4.2.5",
  "title": "Invertibility Criteria.",
  "body": " Invertibility Criteria   Let be a matrix. Then the following are equivalent:   is invertible.  The columns of are linearly independent.  The columns of span .  The rows of are linearly independent.  The rows of span the set of all rows (think of this as .     "
},
{
  "id": "sec-independence-and-dimension-3-7",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-3-7",
  "type": "Activity",
  "number": "4.2.5",
  "title": "",
  "body": "  Let , where . Is linearly dependent?    Because of , it suffices to check that the matrix is invertible, and we can do this by verifying that . Using a cofactor expansion along the first row, we verify that .   "
},
{
  "id": "sec-independence-and-dimension-3-8",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-3-8",
  "type": "Activity",
  "number": "4.2.6",
  "title": "",
  "body": "  If and are nonzero vectors in , show that is dependent if and only if and are parallel, i.e. if one vector is a scalar multiple of the other.    If and are parallel, then one is a scalar multiple of the other, say for some scalar . Then , which is a non-trivial linear combination of and , so is dependent.  Conversely, if is dependent, then for some scalars and , where or . If, say, , then , so and are parallel. A similar argument works if .   "
},
{
  "id": "sec-independence-and-dimension-3-9",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-3-9",
  "type": "Activity",
  "number": "4.2.7",
  "title": "",
  "body": "  Let , and are non-zero vectors in , where is independent. Show that is independent if and only if is not in the subspace . See and .   independent.       dependent.        If is independent, suppose that is in , say, that for some scalars and . Then . Thus a non-trivial linear combination of , and is equal to zero, contradicting the independent of .  On the other hand, suppose is not in . We need to show that is independent. If , where , , and are not all zero, then , for otherwise , which contradicts the independence of . But then , which contradicts that is not in .   "
},
{
  "id": "note-5-2-independent-expansion-by-one",
  "level": "2",
  "url": "sec-independence-and-dimension.html#note-5-2-independent-expansion-by-one",
  "type": "Note",
  "number": "4.2.8",
  "title": "",
  "body": "  More generally, if are a linearly independent set of vectors in , and is another vector in , then is a linearly independent set if and only if is not contained in the span of the set .   "
},
{
  "id": "sec-independence-and-dimension-3-11",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-3-11",
  "type": "Activity",
  "number": "4.2.8",
  "title": "",
  "body": "  Prove that a matrix has linearly independent columns if and only if is invertible.    Suppose that the columns of are linearly independent. We must show that is invertible, which is true if and only if the only solution to the equation only has the trivial solution. So suppose . Then . Recalling , if we let , then . But the only vector such that is the zero vector, because if , then , and the only way this quantity can be equal to zero is if , and thus that . Thus . But because the columns of are linearly independent, the only solution to is . Therefore we have proved that is invertible.  Conversely, suppose that is invertible. To show has linearly independent columns, it suffices to show that the equation has only the trivial solution. But if is any such solution, then . Since is invertible, this can only be true if . Thus only the trivial solution exists.   "
},
{
  "id": "thm-5-2-fundamental-theorem",
  "level": "2",
  "url": "sec-independence-and-dimension.html#thm-5-2-fundamental-theorem",
  "type": "Theorem",
  "number": "4.2.9",
  "title": "A Fundamental Theorem.",
  "body": " A Fundamental Theorem   Let be a subspace of . If is spanned by vectors, and if contains linearly independent vectors, then .   "
},
{
  "id": "sec-independence-and-dimension-4-4",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-4-4",
  "type": "Activity",
  "number": "4.2.9",
  "title": "",
  "body": "  Is it possible to have linearly independent vectors in ?    It is not possible. is spanned by vectors (for example, the standard basis vectors), so by , any linearly independent subset of must contain at most vectors.   "
},
{
  "id": "sec-5-2-bases",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-5-2-bases",
  "type": "Definition",
  "number": "4.2.10",
  "title": "Bases of Vector Spaces.",
  "body": " Bases of Vector Spaces   If is a subspace of , a set of vectors in is called a basis of if it satisfies the following two conditions:   is linearly independent .   .     "
},
{
  "id": "thm-5-2-invariance-theorem",
  "level": "2",
  "url": "sec-independence-and-dimension.html#thm-5-2-invariance-theorem",
  "type": "Theorem",
  "number": "4.2.11",
  "title": "The Invariance Theorem.",
  "body": " The Invariance Theorem   If and are both bases for a subspace of , then .   "
},
{
  "id": "sec-independence-and-dimension-4-8",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-4-8",
  "type": "Definition",
  "number": "4.2.12",
  "title": "Dimensions of Vector Spaces.",
  "body": " Dimensions of Vector Spaces   The dimension of a non-zero subspace of is the number of vectors in a basis for . We often write for the dimension of , and if , we say is -dimensional. By convention, the dimension of the trivial subspace is zero .   "
},
{
  "id": "sec-independence-and-dimension-4-9",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-4-9",
  "type": "Activity",
  "number": "4.2.10",
  "title": "",
  "body": "  What is the dimension of ?   The standard basis for is a basis, i.e. the set of three vectors defined in is linearly independent and spans . Thus has dimension .    What is the dimension of ?   The standard basis for is a basis, and is a set of four vectors, so .    What is the dimension of ?   The standard basis is a basis for , so .   "
},
{
  "id": "sec-independence-and-dimension-4-10",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-4-10",
  "type": "Activity",
  "number": "4.2.11",
  "title": "",
  "body": "  Find the dimension of the space .    The set is a basis for since is linearly independent (neither vector in is the scalar multiple of the other). In the solution to , we showed that these vectors span , so is a basis for . Since contains two vectors, .   "
},
{
  "id": "fact-5-2-expanding-linearly-independent",
  "level": "2",
  "url": "sec-independence-and-dimension.html#fact-5-2-expanding-linearly-independent",
  "type": "Fact",
  "number": "4.2.13",
  "title": "",
  "body": "  Let be a non-zero subspace of . Then   has a basis and .  Any independent set in can be enlarged (by adding some subset of vectors in any fixed basis) to obtain a basis of .  Any spanning set for contains a subset of vectors which form a basis for .     "
},
{
  "id": "sec-independence-and-dimension-4-12",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-4-12",
  "type": "Theorem",
  "number": "4.2.14",
  "title": "",
  "body": "  Let be a subspace of where and let be a set of vectors in . Then is linearly independent if and only if spans .    Suppose is linearly independent and , then by , one cannot add any new vectors to the set and remain linearly independent. But says that if is not already a spanning set for , one can add new vectors to from , and remain linearly independent. Thus must be a basis.  Conversely, if spans , then by we can choose a subset of which is a basis for . But any proper subset of contains fewer than vectors, and thus by , cannot be a basis for . Thus is the only subset of itself that can be a bais, and because must contain a basis, the set must itself be a basis.   "
},
{
  "id": "sec-independence-and-dimension-4-13",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-4-13",
  "type": "Theorem",
  "number": "4.2.15",
  "title": "",
  "body": "  Let and be subspaces of with . Then:   .  If , then .     "
},
{
  "id": "sec-independence-and-dimension-4-14",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-4-14",
  "type": "Activity",
  "number": "4.2.12",
  "title": "",
  "body": "  Find a basis for that contains the two vectors .    Since is four dimensional, we must find two vectors and such that the vectors is linearly independent. states that we can choose these vectors from any basis, so we might as well choose them from the standard basis .  One strategy is to choose one vector not contained in the span of the set , and then choose a vector not contained in the span of the set . By , the set .  The vector is not contained in the span of the set , since the second entry in any linear combination of the vectors and is equal to zero, and thus the vector cannot be equal to .  We also claim that the vector is not contained in the span of the set . If , then checking each entry, we get the system of linear equations The first and forth equations immediately contradict one another, so such a system cannot be solved.  Thus is a basis for .   "
},
{
  "id": "sec-independence-and-dimension-5-3",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-5-3",
  "type": "Definition",
  "number": "4.2.16",
  "title": "Ordered Bases of a Subspace.",
  "body": " Ordered Bases of a Subspace   Let be a basis of the subspace . We call the tuple an ordered basis of .   "
},
{
  "id": "sec-independence-and-dimension-5-5",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-5-5",
  "type": "Note",
  "number": "4.2.17",
  "title": "",
  "body": "  Many Linear Algebra textbooks, including Linear Algebra With Applications, Nicholson write ordered bases using set notation , despite the order in which the basis elements appear being important. We use tuple notation to emphasize the importance of the order.   "
},
{
  "id": "sec-independence-and-dimension-5-7",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-5-7",
  "type": "Definition",
  "number": "4.2.18",
  "title": "Coordinate Vectors With Respect to a Basis.",
  "body": " Coordinate Vectors With Respect to a Basis   Let be an -dimensional subspace of , and let be an ordered basis for . Given any vector , there exists unique scalars such that and we define the coordinate vector of a vector with respect to to be the -vector . See for an illustration of this concept, taken from Stanford's MATH 51 Textbook .   "
},
{
  "id": "sec-independence-and-dimension-5-8",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-5-8",
  "type": "Note",
  "number": "4.2.19",
  "title": "",
  "body": "  If is an ordered basis for a subspace , then , where is the th standard basis vector in .   "
},
{
  "id": "fig-5-2-coordinate-basis-diagram",
  "level": "2",
  "url": "sec-independence-and-dimension.html#fig-5-2-coordinate-basis-diagram",
  "type": "Figure",
  "number": "4.2.20",
  "title": "",
  "body": " A parallelelogram grid constructed from a basis for . The points lying at the intersection of lines on the grid are precisely those vectors where the entries of the vector are integers.     "
},
{
  "id": "sec-independence-and-dimension-5-10",
  "level": "2",
  "url": "sec-independence-and-dimension.html#sec-independence-and-dimension-5-10",
  "type": "Activity",
  "number": "4.2.13",
  "title": "",
  "body": "  Let be an ordered basis for , where . What is if .    We need to find scalars , and such that . Comparing entries of the vectors gives a system of three equations, i.e. Using back substitution, we find that , , and are the unique solution to this system. Thus .   "
},
{
  "id": "sec-rank-of-a-matrix",
  "level": "1",
  "url": "sec-rank-of-a-matrix.html",
  "type": "Section",
  "number": "4.3",
  "title": "The Rank of a Matrix",
  "body": " The Rank of a Matrix  We are now going to connect the concept of dimension with the notion of rank. In this section, we will often realize vectors in as rows rather than columns. The notion of span, linear independence, and basis are defined analogously as how they are defined for column vectors.   Column and Row Space   Let be an matrix.  The columns of , considered as vectors in span a subspace of called the column space of , denoted .  The rows of , considered as vectors in , span a subspace of called the row space of , denoted .        The column space of is equal to it's image space, as defined in .      Let and be two row equivalent matrices. Then .    Each time we apply a row operation to a matrix, we replace one or more of it's rows with a linear combination of other rows. Thus the row space of a matrix obtained by applying a row operation to a matrix must be contained in the row space of . But applying the argument in reverse (since every row operation is reversible), the row space of must be contained in the row space of . Thus the two row spaces are equal. But if the row space is not changed after applying a single row operation, it is not changed after applying an arbitrary number of row operations, and so the result follows.      If is a matrix in row echelon form (recall ) then the non-zero rows of are a basis of .    The nonzero rows of are linearly independent by , and span by definition. They thus by definition form a basis for .      In , we defined the rank of a matrix as the number of leading 1s (i.e. the number of pivots) of any matrix in row echelon form which is row-equivalent to . By , , which justifies that the rank of is independent of the choice of matrix .      Find a basis for , where .    The subspace is the row space of the matrix . If we reduce this matrix to row echelon form, we thus find a basis for : . Thus is a basis for .     The Rank Theorem   Let denote any matrix of rank . Then . Moreover, if is row-equivalent to a matrix in row echelon form, then  The leading rows of are a basis for .  If the pivots of lie in columns , then the columns of are a basis for .        It follows from that for any matrix , .      Let be the matrix we considered in the solution to .    What is ?   The dimension of the row space of is equal to the rank of , which is (the number of non-zero rows in the row echelon form for , as computed in the solution to ).    Find a basis for the column space of .   The leading 1s in the row echelon form for computed in occur in the 1st and 2nd columns, so the 1st and 2nd columns of form a basis for the column space, i.e. is a basis for .    What is ?   The dimension of the colum space of is two, since we constructed a basis with two elements in the previous task. Alternatively, the dimension of the column space is equal to the rank of , which we also computed to be two.    Find a basis for the nullspace of .   To find a basis for the solutions to the equation , we convert to row-echelon form and find basic solutions. From the row-echelon form , we obtain the two basic solutions , so the set consisting of these two vectors forms a basis for the nullspace of .      The nullity of a matrix is equal to . It is denoted .     The Rank-Nullity Theorem   Let denote an matrix of rank . Then  The basic solutions to the equation provided by the Gaussian algorithm are a basis for , so .   .   .   .        Consider the matrix . You may use the fact that the matrix in reduced row echelon form equal to is the matrix .    Find a basis for .   We use the fact that . Using , since the pivots of the matrix has pivots in the 1st and 3rd column, the column space of , and thus the image of has a basis given by the 1st and 3rd columns of , i.e. we have a basis .    Find a basis for .   The 2nd and 4th columns of the matrix in do not contain pivots, so and correspond to free variables in the equation, and solutions to are specified by the two equations and . The two basis solutions give a basis for the nullspace, and thus we have a basis of the form .    "
},
{
  "id": "def-5-3-column-and-row-space",
  "level": "2",
  "url": "sec-rank-of-a-matrix.html#def-5-3-column-and-row-space",
  "type": "Definition",
  "number": "4.3.1",
  "title": "Column and Row Space.",
  "body": " Column and Row Space   Let be an matrix.  The columns of , considered as vectors in span a subspace of called the column space of , denoted .  The rows of , considered as vectors in , span a subspace of called the row space of , denoted .     "
},
{
  "id": "sec-rank-of-a-matrix-4",
  "level": "2",
  "url": "sec-rank-of-a-matrix.html#sec-rank-of-a-matrix-4",
  "type": "Note",
  "number": "4.3.2",
  "title": "",
  "body": "  The column space of is equal to it's image space, as defined in .   "
},
{
  "id": "sec-rank-of-a-matrix-5",
  "level": "2",
  "url": "sec-rank-of-a-matrix.html#sec-rank-of-a-matrix-5",
  "type": "Lemma",
  "number": "4.3.3",
  "title": "",
  "body": "  Let and be two row equivalent matrices. Then .    Each time we apply a row operation to a matrix, we replace one or more of it's rows with a linear combination of other rows. Thus the row space of a matrix obtained by applying a row operation to a matrix must be contained in the row space of . But applying the argument in reverse (since every row operation is reversible), the row space of must be contained in the row space of . Thus the two row spaces are equal. But if the row space is not changed after applying a single row operation, it is not changed after applying an arbitrary number of row operations, and so the result follows.   "
},
{
  "id": "lem-5-2-row-echelon-basis-row-space",
  "level": "2",
  "url": "sec-rank-of-a-matrix.html#lem-5-2-row-echelon-basis-row-space",
  "type": "Lemma",
  "number": "4.3.4",
  "title": "",
  "body": "  If is a matrix in row echelon form (recall ) then the non-zero rows of are a basis of .    The nonzero rows of are linearly independent by , and span by definition. They thus by definition form a basis for .   "
},
{
  "id": "sec-rank-of-a-matrix-7",
  "level": "2",
  "url": "sec-rank-of-a-matrix.html#sec-rank-of-a-matrix-7",
  "type": "Remark",
  "number": "4.3.5",
  "title": "",
  "body": "  In , we defined the rank of a matrix as the number of leading 1s (i.e. the number of pivots) of any matrix in row echelon form which is row-equivalent to . By , , which justifies that the rank of is independent of the choice of matrix .   "
},
{
  "id": "act-5-3-basis-for-V",
  "level": "2",
  "url": "sec-rank-of-a-matrix.html#act-5-3-basis-for-V",
  "type": "Activity",
  "number": "4.3.1",
  "title": "",
  "body": "  Find a basis for , where .    The subspace is the row space of the matrix . If we reduce this matrix to row echelon form, we thus find a basis for : . Thus is a basis for .   "
},
{
  "id": "thm-5-3-rank-theorem",
  "level": "2",
  "url": "sec-rank-of-a-matrix.html#thm-5-3-rank-theorem",
  "type": "Theorem",
  "number": "4.3.6",
  "title": "The Rank Theorem.",
  "body": " The Rank Theorem   Let denote any matrix of rank . Then . Moreover, if is row-equivalent to a matrix in row echelon form, then  The leading rows of are a basis for .  If the pivots of lie in columns , then the columns of are a basis for .     "
},
{
  "id": "sec-rank-of-a-matrix-10",
  "level": "2",
  "url": "sec-rank-of-a-matrix.html#sec-rank-of-a-matrix-10",
  "type": "Fact",
  "number": "4.3.7",
  "title": "",
  "body": "  It follows from that for any matrix , .   "
},
{
  "id": "sec-rank-of-a-matrix-11",
  "level": "2",
  "url": "sec-rank-of-a-matrix.html#sec-rank-of-a-matrix-11",
  "type": "Activity",
  "number": "4.3.2",
  "title": "",
  "body": "  Let be the matrix we considered in the solution to .    What is ?   The dimension of the row space of is equal to the rank of , which is (the number of non-zero rows in the row echelon form for , as computed in the solution to ).    Find a basis for the column space of .   The leading 1s in the row echelon form for computed in occur in the 1st and 2nd columns, so the 1st and 2nd columns of form a basis for the column space, i.e. is a basis for .    What is ?   The dimension of the colum space of is two, since we constructed a basis with two elements in the previous task. Alternatively, the dimension of the column space is equal to the rank of , which we also computed to be two.    Find a basis for the nullspace of .   To find a basis for the solutions to the equation , we convert to row-echelon form and find basic solutions. From the row-echelon form , we obtain the two basic solutions , so the set consisting of these two vectors forms a basis for the nullspace of .   "
},
{
  "id": "sec-rank-of-a-matrix-12",
  "level": "2",
  "url": "sec-rank-of-a-matrix.html#sec-rank-of-a-matrix-12",
  "type": "Definition",
  "number": "4.3.8",
  "title": "",
  "body": "  The nullity of a matrix is equal to . It is denoted .   "
},
{
  "id": "thm-5-3-rank-nullity",
  "level": "2",
  "url": "sec-rank-of-a-matrix.html#thm-5-3-rank-nullity",
  "type": "Theorem",
  "number": "4.3.9",
  "title": "The Rank-Nullity Theorem.",
  "body": " The Rank-Nullity Theorem   Let denote an matrix of rank . Then  The basic solutions to the equation provided by the Gaussian algorithm are a basis for , so .   .   .   .     "
},
{
  "id": "sec-rank-of-a-matrix-14",
  "level": "2",
  "url": "sec-rank-of-a-matrix.html#sec-rank-of-a-matrix-14",
  "type": "Activity",
  "number": "4.3.3",
  "title": "",
  "body": "  Consider the matrix . You may use the fact that the matrix in reduced row echelon form equal to is the matrix .    Find a basis for .   We use the fact that . Using , since the pivots of the matrix has pivots in the 1st and 3rd column, the column space of , and thus the image of has a basis given by the 1st and 3rd columns of , i.e. we have a basis .    Find a basis for .   The 2nd and 4th columns of the matrix in do not contain pivots, so and correspond to free variables in the equation, and solutions to are specified by the two equations and . The two basis solutions give a basis for the nullspace, and thus we have a basis of the form .   "
},
{
  "id": "sec-abstract-examples",
  "level": "1",
  "url": "sec-abstract-examples.html",
  "type": "Section",
  "number": "4.4",
  "title": "Other Vector Spaces",
  "body": " Other Vector Spaces    The results we have proved about subspaces of apply more generally to finite-dimensional vector spaces , which are sets of objects which we can add and multiply by scalars in ways entirely analogous to row and column vectors. We will define vector spaces in the following section in . In this section we give some more vector spaces that show up in practical application of linear algebra here.     Vector Spaces of Polynomials   The Vector Space of Polynomials   A polynomial is a function expressible as where are real numbers, and is a non-negative integer. If we say that has degree  . Let be the set of all polynomials of degree at most , together with the zero polynomial , denoted .      A polynomial is a function expressible as where are real numbers, and is a non-negative integer. If we say that has degree  . We let denote the set of all polynomials, and the set of all polynomials with degree at most .    One can add two polynomials to get a new polynomial, and multiply a polynomial by a scalar to get a new polynomial, so the sets behave analogously to column vectors, and so we can apply all the terminology we have developed for column vectors in the past chapter to polynomials.    Consider the set of all polynomials in that have as a root, i.e. the set . Show that is a subspace of .    Recall the definition of subspaces given in . The set is a subspace of precisely when contains the zero polynomial (the polynomial such that for all ), and is closed under addition and scalar multiplication:   Contains the zero polynomial  , so .   Closure Under Addition If and are in , then and , and , so .   Closure under Scalar Multiplication If and is a scalar, then and so , so .  Since all three conditions are satified, is a subspace of .      Consider the polynomials in . Determine whether belongs to the span of and .    We must determine whether there are scalars and such that . This can only be possible if the coefficients of the polynomials on each side of the equation are equal to one another. Expanding, we have so Solving this system using one of the various methods we have considered in this class shows this system is inconsistent, with no solution, and so .      Consider the ordered basis for . Find for .    We must find scalars and such that . Expanding gives which gives and . Solving gives and , and so .      Vector Spaces of Matrices    For each pair of positive integers and , we let denote the set of all matrices with real entries. This set is also sometimes denoted by or .    Just as for polynomials, we can add two matrices together, and multiply matrices by scalars, so the terminology we have introduced in this chapter can also be applied to .    Suppose that is a matrix such that but . Show that the set is linearly independent in .    Suppose that . If we multiply both sides of the equation by , we find that (since for all ), . Thus . Multiplying by , we find that , and thus that . Repeatedly applying this process by multiplying by , we find that for all . Therefore is linearly independent.      Let be a fixed matrix in . Define the set .    Show that is a subspace of .   The set is a subspace of precisely when contains the zero matrix and is closed under addition and scalar multiplication:   Contains the zero matrix  and , so , so .   Closure Under Addition If , then to verify we must check that . But and , so .   Closure under Scalar Multiplication If and is a scalar, then to verify we must check that . But .  Since all three conditions are satified, is a subspace of .    Find a spanning set for .   Let . Then and . Thus comparing entries of these matrices, if and only if , , and . Solving these equations gives and , and so an arbitrary entry of can be written as . Thus     Show that and find a basis for .   In the previous part of this activity, we verified that We claim that is also a basis, and to do this it suffices to show that has only the trivial solution and . But we can simplify this equation to read and this matrix can only be equal to zero if and .  Since the basis we have found has two elements, this implies that is two dimensional.      Linear Transformations in Abstract Vector Spaces  Recall that a function between two sets and is a rule that assigns to each a unique . Two functions and are equal if for all .   Linear Transformations   A function between two vector spaces and is a linear transformation if it satifies the following two conditions:   Preserves Addition  for all .   Preserves Scalar Multiplication  for all and all scalars .    A linear transformation is called a linear operator .      The first condition of a linear transformation states that adding two vectors in , and then applying a linear transformation in , is the same as first applying , and then adding the resulting vectors in . Note that, despite using the addition symbol on both sides of the equation, these operations denote different addition operations: the operation on the left performed in , and the operation on the right performed in .     Kernels and Images of Linear Transformations   The kernel of a linear transformation is . The image of is . The kernel of is also called the nullspace of because it consists of all solutions to the equation . The image of is also called the range of , and consists of all vectors for which the equation is solvable in .    Let and be sets. A function is called injective , or one-to-one , if does not map two distinct elements of it's domain to the same element of it's codomain, i.e. when the equation only holds for two elements if . A function is called surjective , or onto , if all elements of can be written as for some .  For linear transformations , the transformation is injective if and only if (since the equation is equivalent to , i.e. to ). The transformation is surjective if and only if .    Let be the differentiation map .    Show that is a linear transformation.   First, note that is a well defined function from to , because the derivative of a polynomial with degree at most is a polynomial with degree at most .  That preserves addition follows because of the sum rule for the derivative, i.e. because . That preserves scalar multiplication follows because of the rule for scalars , so that .  Thus satisfies both properties necessary and sufficient for to be a linear transformation.    Compute .   It suffices to find all polynomials with degree at most such that for all . The only functions whose derivative is equal to zero everywhere are constants, so consists precisely of the set of constant polynomials.     "
},
{
  "id": "sec-abstract-examples-2-1-1",
  "level": "2",
  "url": "sec-abstract-examples.html#sec-abstract-examples-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "finite-dimensional vector spaces "
},
{
  "id": "sec-abstract-examples-3-2",
  "level": "2",
  "url": "sec-abstract-examples.html#sec-abstract-examples-3-2",
  "type": "Definition",
  "number": "4.4.1",
  "title": "The Vector Space of Polynomials.",
  "body": " The Vector Space of Polynomials   A polynomial is a function expressible as where are real numbers, and is a non-negative integer. If we say that has degree  . Let be the set of all polynomials of degree at most , together with the zero polynomial , denoted .   "
},
{
  "id": "sec-5-4-polynomials",
  "level": "2",
  "url": "sec-abstract-examples.html#sec-5-4-polynomials",
  "type": "Definition",
  "number": "4.4.2",
  "title": "",
  "body": "  A polynomial is a function expressible as where are real numbers, and is a non-negative integer. If we say that has degree  . We let denote the set of all polynomials, and the set of all polynomials with degree at most .   "
},
{
  "id": "sec-abstract-examples-3-5",
  "level": "2",
  "url": "sec-abstract-examples.html#sec-abstract-examples-3-5",
  "type": "Activity",
  "number": "4.4.1",
  "title": "",
  "body": "  Consider the set of all polynomials in that have as a root, i.e. the set . Show that is a subspace of .    Recall the definition of subspaces given in . The set is a subspace of precisely when contains the zero polynomial (the polynomial such that for all ), and is closed under addition and scalar multiplication:   Contains the zero polynomial  , so .   Closure Under Addition If and are in , then and , and , so .   Closure under Scalar Multiplication If and is a scalar, then and so , so .  Since all three conditions are satified, is a subspace of .   "
},
{
  "id": "sec-abstract-examples-3-6",
  "level": "2",
  "url": "sec-abstract-examples.html#sec-abstract-examples-3-6",
  "type": "Activity",
  "number": "4.4.2",
  "title": "",
  "body": "  Consider the polynomials in . Determine whether belongs to the span of and .    We must determine whether there are scalars and such that . This can only be possible if the coefficients of the polynomials on each side of the equation are equal to one another. Expanding, we have so Solving this system using one of the various methods we have considered in this class shows this system is inconsistent, with no solution, and so .   "
},
{
  "id": "sec-abstract-examples-3-7",
  "level": "2",
  "url": "sec-abstract-examples.html#sec-abstract-examples-3-7",
  "type": "Activity",
  "number": "4.4.3",
  "title": "",
  "body": "  Consider the ordered basis for . Find for .    We must find scalars and such that . Expanding gives which gives and . Solving gives and , and so .   "
},
{
  "id": "def-5-4-matrices-vect",
  "level": "2",
  "url": "sec-abstract-examples.html#def-5-4-matrices-vect",
  "type": "Definition",
  "number": "4.4.3",
  "title": "",
  "body": "  For each pair of positive integers and , we let denote the set of all matrices with real entries. This set is also sometimes denoted by or .   "
},
{
  "id": "sec-abstract-examples-4-4",
  "level": "2",
  "url": "sec-abstract-examples.html#sec-abstract-examples-4-4",
  "type": "Activity",
  "number": "4.4.4",
  "title": "",
  "body": "  Suppose that is a matrix such that but . Show that the set is linearly independent in .    Suppose that . If we multiply both sides of the equation by , we find that (since for all ), . Thus . Multiplying by , we find that , and thus that . Repeatedly applying this process by multiplying by , we find that for all . Therefore is linearly independent.   "
},
{
  "id": "sec-abstract-examples-4-5",
  "level": "2",
  "url": "sec-abstract-examples.html#sec-abstract-examples-4-5",
  "type": "Activity",
  "number": "4.4.5",
  "title": "",
  "body": "  Let be a fixed matrix in . Define the set .    Show that is a subspace of .   The set is a subspace of precisely when contains the zero matrix and is closed under addition and scalar multiplication:   Contains the zero matrix  and , so , so .   Closure Under Addition If , then to verify we must check that . But and , so .   Closure under Scalar Multiplication If and is a scalar, then to verify we must check that . But .  Since all three conditions are satified, is a subspace of .    Find a spanning set for .   Let . Then and . Thus comparing entries of these matrices, if and only if , , and . Solving these equations gives and , and so an arbitrary entry of can be written as . Thus     Show that and find a basis for .   In the previous part of this activity, we verified that We claim that is also a basis, and to do this it suffices to show that has only the trivial solution and . But we can simplify this equation to read and this matrix can only be equal to zero if and .  Since the basis we have found has two elements, this implies that is two dimensional.   "
},
{
  "id": "sec-abstract-examples-5-3",
  "level": "2",
  "url": "sec-abstract-examples.html#sec-abstract-examples-5-3",
  "type": "Definition",
  "number": "4.4.4",
  "title": "Linear Transformations.",
  "body": " Linear Transformations   A function between two vector spaces and is a linear transformation if it satifies the following two conditions:   Preserves Addition  for all .   Preserves Scalar Multiplication  for all and all scalars .    A linear transformation is called a linear operator .   "
},
{
  "id": "sec-abstract-examples-5-4",
  "level": "2",
  "url": "sec-abstract-examples.html#sec-abstract-examples-5-4",
  "type": "Note",
  "number": "4.4.5",
  "title": "",
  "body": "  The first condition of a linear transformation states that adding two vectors in , and then applying a linear transformation in , is the same as first applying , and then adding the resulting vectors in . Note that, despite using the addition symbol on both sides of the equation, these operations denote different addition operations: the operation on the left performed in , and the operation on the right performed in .   "
},
{
  "id": "sec-abstract-examples-5-5",
  "level": "2",
  "url": "sec-abstract-examples.html#sec-abstract-examples-5-5",
  "type": "Definition",
  "number": "4.4.6",
  "title": "Kernels and Images of Linear Transformations.",
  "body": " Kernels and Images of Linear Transformations   The kernel of a linear transformation is . The image of is . The kernel of is also called the nullspace of because it consists of all solutions to the equation . The image of is also called the range of , and consists of all vectors for which the equation is solvable in .   "
},
{
  "id": "def-5-4-inject-and-surject",
  "level": "2",
  "url": "sec-abstract-examples.html#def-5-4-inject-and-surject",
  "type": "Definition",
  "number": "4.4.7",
  "title": "",
  "body": "Let and be sets. A function is called injective , or one-to-one , if does not map two distinct elements of it's domain to the same element of it's codomain, i.e. when the equation only holds for two elements if . A function is called surjective , or onto , if all elements of can be written as for some . "
},
{
  "id": "sec-abstract-examples-5-8",
  "level": "2",
  "url": "sec-abstract-examples.html#sec-abstract-examples-5-8",
  "type": "Activity",
  "number": "4.4.6",
  "title": "",
  "body": "  Let be the differentiation map .    Show that is a linear transformation.   First, note that is a well defined function from to , because the derivative of a polynomial with degree at most is a polynomial with degree at most .  That preserves addition follows because of the sum rule for the derivative, i.e. because . That preserves scalar multiplication follows because of the rule for scalars , so that .  Thus satisfies both properties necessary and sufficient for to be a linear transformation.    Compute .   It suffices to find all polynomials with degree at most such that for all . The only functions whose derivative is equal to zero everywhere are constants, so consists precisely of the set of constant polynomials.   "
},
{
  "id": "sec-abstract-vector-spaces",
  "level": "1",
  "url": "sec-abstract-vector-spaces.html",
  "type": "Section",
  "number": "4.5",
  "title": "Abstract Vector Spaces",
  "body": " Abstract Vector Spaces    In the previous parts of Chapter 5, we will work with vectors in . Many results rely on the fact that vectors in can be added together, and multiplied by scalars, in ways which respect familiar algebraic laws for the real numbers. Many other useful sets in mathematics exhibit these useful properties in this chapter we will develop a theory of such objects.      A real vector space consists of a nonempty set of objects (which we will call vectors ) that can be added together, and multiplied by a real number (called a scalar in this context) and for which the ten axioms below hold. If and are two vectors in , their sum is denoted , and the scalar product of by a real number is denote by . The axioms of a vector space are described below:   (A1) Closure Under Addition: If and are any elements in , then is in .   (A2) Commutativity of Addition: For any , .   (A3) Associativity of Addition: For any , .   (A4) Existence of a Zero Vector: There exists a zero vector  in , such that for any .   (A5) Existence of Additive Inverses For each there exists in such that . The vector is the negative or additive inverse of .   (S1) Closure Under Scalar Multiplication If is any element of and is any real number, then is in .   (S2) Distributive Law 1 For any and any , .   (S3) Distributive Law 2 For any and any , .   (S4) Associativity of Scalar Multiplication For any and , .   (S5)  for any .  The operation is called vector addition and the operation is called scalar multiplication .     In order to be clear about the operations used, we will often denote newly defined addition and scalar multiplication operations using the symbols and .    We often use the phrase vector space , dropping the real and assuming our scalars are real numbers in this course. However, it is possible to define complex vector spaces, rational vector spaces, and more, using different systems of scalars than the real numbers.    From now on, a vector will mean an element of a vector space, not necessarily a column vector or line segment.   For any natural number , the sets of -vectors are real vector spaces. This is the most common vector space you will occur in day-to-day applications of linear algebra. The sets and introduced in and are also examples of vector spaces, with the standard addition and scalar multiplication as considered in . The set of all polynomials is also a vector space, though unlike the other examples here is infinite dimensional , in the sense that it is not spanned by any finite set of vectors.    Consider the vector space defined in .    Prove that is closed under addition and scalar multiplication. What is the zero vector in this vector space?   For two matrices in , their sum is , which is an element of . The product of a scalar with a matrix is , which is an element of .    What is the zero vector in ?   The zero vector in is the zero matrix , because for any .      Let's walk through the proof that is a vector space.    We go through each axiom one by one:  Let us start by verifying Axiom (A1). We must verify the sum of two polynomials with degree at most two has degree at most two. Let and be two arbitrary polynomials in . Then has degree at most , so lies in . Thus Axiom (A1) holds.  Next, we verify Axiom (A2). We must verify that for any two polynomials, , . But using the commutativity of real numbers, for any real number , if and , then . Thus Axiom (A2) holds.  Next, we verify Axiom (A3). We must verify that for any two polynomials , . But this follows, as above, by using the associativity of real numbers, i.e. that if , , and , then for any , . Thus Axiom (A3) holds.  Next, we verify Axiom (A4). We must check that if is the zero polynomial, then for any . Now if , then for any , Thus Axiom (A4) holds.  Next, we verify Axiom (A5). For each polynomial given by , if we define , then . Indeed . Thus , verifying Axiom (A5).  Next, we verify Axiom (S1). We must verify that for and , . If , and a scalar , . The polynomial still has degree at most , so . Thus Axiom (S1) holds.  Next, we verify Axiom (S2). We must verify that for any and , then . If and , then . Thus Axiom (S2) holds.  Next, we verify Axiom (S3). We must verify that for any and , . If , then . Thus Axiom (S3) holds.  Next, we verify Axiom (S4). We must verify that for any and , . If , then . Thus Axiom (S4) holds.  Finally, we verify Axiom (S5). We must verify that for any , . If , then . Thus Axiom (S5) holds.      Let be the set of all ordered pairs of real numbers with the operations . Show that is not a vector space.    The set , and the operations defined upon it, fail to satisfy Axiom (A4), i.e. no zero vector exists in . Since , it is impossible for there to exist a vector such that for all ordered pairs .  Note that this is not the only axiom that fails to satisfy. also fails to satisfy axioms (A2), (A5), and (S3). Verifying that any one of these axioms fail to hold would also consitute a valid argument that is not a vector space. But a valid argument only needs to check that one of the axioms fails to hold.      Let be the set of all ordered pairs of real numbers with the operations . Show that is not a vector space.    Under this definition of addition and multiplication, fails to satisfy Axiom (S3). We calculate that , and that . If , then the two tuples will not be equal to one another. Thus a particular counterexample that shows that Axiom (S3) fails is obtained by taking , and . Then whereas . These two quantities are evidently not equal to one another, which shows Axiom (S3) fails, and so is not a vector space.      Let be the set of all non-negative real numbers, and define vector addition as , and scalar multiplication as . Does this structure form a vector space?    With this definition, addition is not associative , i.e. Axiom (A3) fails. To find a counterexample, we must find three negative numbers such that . We might as well start simply by guessing some values for which this equation fails to hold, because often if an algebraic identity fails to hold, it fails to hold for most inputs. Choose , , and . Then , whereas . Thus we have found a particular counterexample that shows that addition is not associative.    Below we list several facts about the interaction of addition and multiplication that hold in any vector space.    Let be a vector space. For any and ,   .   .  If , then or .   .   .      "
},
{
  "id": "def-5-5-abstract-vector",
  "level": "2",
  "url": "sec-abstract-vector-spaces.html#def-5-5-abstract-vector",
  "type": "Definition",
  "number": "4.5.1",
  "title": "",
  "body": "  A real vector space consists of a nonempty set of objects (which we will call vectors ) that can be added together, and multiplied by a real number (called a scalar in this context) and for which the ten axioms below hold. If and are two vectors in , their sum is denoted , and the scalar product of by a real number is denote by . The axioms of a vector space are described below:   (A1) Closure Under Addition: If and are any elements in , then is in .   (A2) Commutativity of Addition: For any , .   (A3) Associativity of Addition: For any , .   (A4) Existence of a Zero Vector: There exists a zero vector  in , such that for any .   (A5) Existence of Additive Inverses For each there exists in such that . The vector is the negative or additive inverse of .   (S1) Closure Under Scalar Multiplication If is any element of and is any real number, then is in .   (S2) Distributive Law 1 For any and any , .   (S3) Distributive Law 2 For any and any , .   (S4) Associativity of Scalar Multiplication For any and , .   (S5)  for any .  The operation is called vector addition and the operation is called scalar multiplication .   "
},
{
  "id": "sec-abstract-vector-spaces-4",
  "level": "2",
  "url": "sec-abstract-vector-spaces.html#sec-abstract-vector-spaces-4",
  "type": "Note",
  "number": "4.5.2",
  "title": "",
  "body": " In order to be clear about the operations used, we will often denote newly defined addition and scalar multiplication operations using the symbols and .  "
},
{
  "id": "sec-abstract-vector-spaces-5",
  "level": "2",
  "url": "sec-abstract-vector-spaces.html#sec-abstract-vector-spaces-5",
  "type": "Note",
  "number": "4.5.3",
  "title": "",
  "body": " We often use the phrase vector space , dropping the real and assuming our scalars are real numbers in this course. However, it is possible to define complex vector spaces, rational vector spaces, and more, using different systems of scalars than the real numbers.  "
},
{
  "id": "sec-abstract-vector-spaces-6",
  "level": "2",
  "url": "sec-abstract-vector-spaces.html#sec-abstract-vector-spaces-6",
  "type": "Note",
  "number": "4.5.4",
  "title": "",
  "body": " From now on, a vector will mean an element of a vector space, not necessarily a column vector or line segment.  "
},
{
  "id": "sec-abstract-vector-spaces-8",
  "level": "2",
  "url": "sec-abstract-vector-spaces.html#sec-abstract-vector-spaces-8",
  "type": "Activity",
  "number": "4.5.1",
  "title": "",
  "body": "  Consider the vector space defined in .    Prove that is closed under addition and scalar multiplication. What is the zero vector in this vector space?   For two matrices in , their sum is , which is an element of . The product of a scalar with a matrix is , which is an element of .    What is the zero vector in ?   The zero vector in is the zero matrix , because for any .   "
},
{
  "id": "sec-abstract-vector-spaces-9",
  "level": "2",
  "url": "sec-abstract-vector-spaces.html#sec-abstract-vector-spaces-9",
  "type": "Activity",
  "number": "4.5.2",
  "title": "",
  "body": "  Let's walk through the proof that is a vector space.    We go through each axiom one by one:  Let us start by verifying Axiom (A1). We must verify the sum of two polynomials with degree at most two has degree at most two. Let and be two arbitrary polynomials in . Then has degree at most , so lies in . Thus Axiom (A1) holds.  Next, we verify Axiom (A2). We must verify that for any two polynomials, , . But using the commutativity of real numbers, for any real number , if and , then . Thus Axiom (A2) holds.  Next, we verify Axiom (A3). We must verify that for any two polynomials , . But this follows, as above, by using the associativity of real numbers, i.e. that if , , and , then for any , . Thus Axiom (A3) holds.  Next, we verify Axiom (A4). We must check that if is the zero polynomial, then for any . Now if , then for any , Thus Axiom (A4) holds.  Next, we verify Axiom (A5). For each polynomial given by , if we define , then . Indeed . Thus , verifying Axiom (A5).  Next, we verify Axiom (S1). We must verify that for and , . If , and a scalar , . The polynomial still has degree at most , so . Thus Axiom (S1) holds.  Next, we verify Axiom (S2). We must verify that for any and , then . If and , then . Thus Axiom (S2) holds.  Next, we verify Axiom (S3). We must verify that for any and , . If , then . Thus Axiom (S3) holds.  Next, we verify Axiom (S4). We must verify that for any and , . If , then . Thus Axiom (S4) holds.  Finally, we verify Axiom (S5). We must verify that for any , . If , then . Thus Axiom (S5) holds.   "
},
{
  "id": "sec-abstract-vector-spaces-10",
  "level": "2",
  "url": "sec-abstract-vector-spaces.html#sec-abstract-vector-spaces-10",
  "type": "Activity",
  "number": "4.5.3",
  "title": "",
  "body": "  Let be the set of all ordered pairs of real numbers with the operations . Show that is not a vector space.    The set , and the operations defined upon it, fail to satisfy Axiom (A4), i.e. no zero vector exists in . Since , it is impossible for there to exist a vector such that for all ordered pairs .  Note that this is not the only axiom that fails to satisfy. also fails to satisfy axioms (A2), (A5), and (S3). Verifying that any one of these axioms fail to hold would also consitute a valid argument that is not a vector space. But a valid argument only needs to check that one of the axioms fails to hold.   "
},
{
  "id": "sec-abstract-vector-spaces-11",
  "level": "2",
  "url": "sec-abstract-vector-spaces.html#sec-abstract-vector-spaces-11",
  "type": "Activity",
  "number": "4.5.4",
  "title": "",
  "body": "  Let be the set of all ordered pairs of real numbers with the operations . Show that is not a vector space.    Under this definition of addition and multiplication, fails to satisfy Axiom (S3). We calculate that , and that . If , then the two tuples will not be equal to one another. Thus a particular counterexample that shows that Axiom (S3) fails is obtained by taking , and . Then whereas . These two quantities are evidently not equal to one another, which shows Axiom (S3) fails, and so is not a vector space.   "
},
{
  "id": "sec-abstract-vector-spaces-12",
  "level": "2",
  "url": "sec-abstract-vector-spaces.html#sec-abstract-vector-spaces-12",
  "type": "Activity",
  "number": "4.5.5",
  "title": "",
  "body": "  Let be the set of all non-negative real numbers, and define vector addition as , and scalar multiplication as . Does this structure form a vector space?    With this definition, addition is not associative , i.e. Axiom (A3) fails. To find a counterexample, we must find three negative numbers such that . We might as well start simply by guessing some values for which this equation fails to hold, because often if an algebraic identity fails to hold, it fails to hold for most inputs. Choose , , and . Then , whereas . Thus we have found a particular counterexample that shows that addition is not associative.   "
},
{
  "id": "sec-abstract-vector-spaces-14",
  "level": "2",
  "url": "sec-abstract-vector-spaces.html#sec-abstract-vector-spaces-14",
  "type": "Theorem",
  "number": "4.5.5",
  "title": "",
  "body": "  Let be a vector space. For any and ,   .   .  If , then or .   .   .     "
},
{
  "id": "sec-orthogonality",
  "level": "1",
  "url": "sec-orthogonality.html",
  "type": "Section",
  "number": "5.1",
  "title": "Orthogonality",
  "body": " Orthogonality   Basic Definitions    Recall the definition of the dot product of two vectors, introduced in , and the length of a vector as introduced in . The distance between two points and is the length of the vector , i.e. . If is any non-zero vector, then the vector is the unit vector in the direction of (a unit vector is a vector of length one). Two vectors and are orthogonal or perpendicular if .     The Cauchy-Schwarz Inequality   If are vectors in , . Moreover, only when and are scalar multiples of each other.     The Triangle Inequality   If , then .     The Triangle Inequality for vectors implies the Triangle Inequality for the distance function, i.e. that . Indeed, we calculate that .     Let , , and be vectors in , and let be a scalar in . Then the following properties hold:   .   .   .   .   , and if and only if .   .        Show that for any .    We calculate using the properties in that .      Suppose that for some vectors . If , and for each , then show .    Since is spanned by the vectors , we can write for some scalars . But then . Thus . But this can only occur if by .      Orthogonal Sets and the Expansion Theorem   Orthogonal and Orthonormal Sets   A set of vectors is called an orthogonal set if the set does not contain the zero vector, and for . A set is called orthonormal if it is orthogonal and if in addition, for each .    Note that is an orthogonal set if . The standard basis (see ) is an important orthonormal set in .    Orthogonal Sets and Bases    Consider the following vectors in , written as column vectors: . Verify that these vectors form an orthogonal set in . Then find the orthonormal set obtained by normalizing these vectors, i.e. multiplying each vector by an appropriate constant to obtain a unit vector.    To verify that form an orthogonal set, we need to check that for all . We calculate that . Since all these dot products are zero, the set is orthogonal.  To normalize these vectors, we need to calculate their lengths and divide each vector by its length. We find that . Therefore the normalized vectors are given by: .     Pythagoras' Theorem   If is an orthogonal set in , then       Every orthogonal set in is linearly independent.    Let be an orthogonal set in . To show the set is linearly independent (recalling ), we must show the only solution to the linear equation occurs when .  If we take the dot product of both sides of the equation with , we find that and therefore that Since the set of vectors is orthogonal, for all , and , so we conclude that Since (by definition, an orthogonal set cannot contain the zero vector), , and so it must be true that . But now repeating this argument with replaced by any index , we conclude that . Therefore the set is linearly independent.     Expansion Theorem   Let be an orthogonal basis of a subspace of . If is any vector in , we have     Since spans , any can be written uniquely as for some . To find coefficient , take the dot product of both sides with , obtaining that . Since the basis is orthogonal, for , and so the equation simplifies to . Rearranging, we conclude that A similar argument shows that for each , concluding the proof.     The Fourier Expansion in an orthogonal basis   Given an orthogonal basis for some subspace of , the expansion of as a linear combination of this basis is called the Fourier expansion of the vector , and the coefficients are called the Fourier coefficients of .      Let be a vector in . Find the Fourier expansion of as a linear combination of the orthogonal basis given in .    We need to find the Fourier coefficients for . In we already computed the lengths of the elements of the basis, namely, that . We now calculate the dot products: Therefore, the Fourier coefficients are: The Fourier expansion of in the basis is therefore .     "
},
{
  "id": "sec-orthogonality-2-2",
  "level": "2",
  "url": "sec-orthogonality.html#sec-orthogonality-2-2",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "  Recall the definition of the dot product of two vectors, introduced in , and the length of a vector as introduced in . The distance between two points and is the length of the vector , i.e. . If is any non-zero vector, then the vector is the unit vector in the direction of (a unit vector is a vector of length one). Two vectors and are orthogonal or perpendicular if .   "
},
{
  "id": "thm-6-1-cauchy-schwarz",
  "level": "2",
  "url": "sec-orthogonality.html#thm-6-1-cauchy-schwarz",
  "type": "Theorem",
  "number": "5.1.2",
  "title": "The Cauchy-Schwarz Inequality.",
  "body": " The Cauchy-Schwarz Inequality   If are vectors in , . Moreover, only when and are scalar multiples of each other.   "
},
{
  "id": "sec-orthogonality-2-4",
  "level": "2",
  "url": "sec-orthogonality.html#sec-orthogonality-2-4",
  "type": "Corollary",
  "number": "5.1.3",
  "title": "The Triangle Inequality.",
  "body": " The Triangle Inequality   If , then .   "
},
{
  "id": "sec-orthogonality-2-5",
  "level": "2",
  "url": "sec-orthogonality.html#sec-orthogonality-2-5",
  "type": "Remark",
  "number": "5.1.4",
  "title": "",
  "body": " The Triangle Inequality for vectors implies the Triangle Inequality for the distance function, i.e. that . Indeed, we calculate that .  "
},
{
  "id": "thm-6-1-dot-product-properties",
  "level": "2",
  "url": "sec-orthogonality.html#thm-6-1-dot-product-properties",
  "type": "Theorem",
  "number": "5.1.5",
  "title": "",
  "body": "  Let , , and be vectors in , and let be a scalar in . Then the following properties hold:   .   .   .   .   , and if and only if .   .     "
},
{
  "id": "sec-orthogonality-2-7",
  "level": "2",
  "url": "sec-orthogonality.html#sec-orthogonality-2-7",
  "type": "Activity",
  "number": "5.1.1",
  "title": "",
  "body": "  Show that for any .    We calculate using the properties in that .   "
},
{
  "id": "sec-orthogonality-2-8",
  "level": "2",
  "url": "sec-orthogonality.html#sec-orthogonality-2-8",
  "type": "Activity",
  "number": "5.1.2",
  "title": "",
  "body": "  Suppose that for some vectors . If , and for each , then show .    Since is spanned by the vectors , we can write for some scalars . But then . Thus . But this can only occur if by .   "
},
{
  "id": "sec-orthogonality-3-2",
  "level": "2",
  "url": "sec-orthogonality.html#sec-orthogonality-3-2",
  "type": "Definition",
  "number": "5.1.6",
  "title": "Orthogonal and Orthonormal Sets.",
  "body": " Orthogonal and Orthonormal Sets   A set of vectors is called an orthogonal set if the set does not contain the zero vector, and for . A set is called orthonormal if it is orthogonal and if in addition, for each .   "
},
{
  "id": "act-6-1-orthogonal-sets",
  "level": "2",
  "url": "sec-orthogonality.html#act-6-1-orthogonal-sets",
  "type": "Activity",
  "number": "5.1.3",
  "title": "",
  "body": "  Consider the following vectors in , written as column vectors: . Verify that these vectors form an orthogonal set in . Then find the orthonormal set obtained by normalizing these vectors, i.e. multiplying each vector by an appropriate constant to obtain a unit vector.    To verify that form an orthogonal set, we need to check that for all . We calculate that . Since all these dot products are zero, the set is orthogonal.  To normalize these vectors, we need to calculate their lengths and divide each vector by its length. We find that . Therefore the normalized vectors are given by: .   "
},
{
  "id": "thm-6-1-pythagoras-theorem",
  "level": "2",
  "url": "sec-orthogonality.html#thm-6-1-pythagoras-theorem",
  "type": "Theorem",
  "number": "5.1.7",
  "title": "Pythagoras’ Theorem.",
  "body": " Pythagoras' Theorem   If is an orthogonal set in , then    "
},
{
  "id": "thm-6-1-orthogonality-independent",
  "level": "2",
  "url": "sec-orthogonality.html#thm-6-1-orthogonality-independent",
  "type": "Theorem",
  "number": "5.1.8",
  "title": "",
  "body": "  Every orthogonal set in is linearly independent.    Let be an orthogonal set in . To show the set is linearly independent (recalling ), we must show the only solution to the linear equation occurs when .  If we take the dot product of both sides of the equation with , we find that and therefore that Since the set of vectors is orthogonal, for all , and , so we conclude that Since (by definition, an orthogonal set cannot contain the zero vector), , and so it must be true that . But now repeating this argument with replaced by any index , we conclude that . Therefore the set is linearly independent.   "
},
{
  "id": "sec-orthogonality-4-5",
  "level": "2",
  "url": "sec-orthogonality.html#sec-orthogonality-4-5",
  "type": "Theorem",
  "number": "5.1.9",
  "title": "Expansion Theorem.",
  "body": " Expansion Theorem   Let be an orthogonal basis of a subspace of . If is any vector in , we have     Since spans , any can be written uniquely as for some . To find coefficient , take the dot product of both sides with , obtaining that . Since the basis is orthogonal, for , and so the equation simplifies to . Rearranging, we conclude that A similar argument shows that for each , concluding the proof.   "
},
{
  "id": "sec-orthogonality-4-6",
  "level": "2",
  "url": "sec-orthogonality.html#sec-orthogonality-4-6",
  "type": "Definition",
  "number": "5.1.10",
  "title": "The Fourier Expansion in an orthogonal basis.",
  "body": " The Fourier Expansion in an orthogonal basis   Given an orthogonal basis for some subspace of , the expansion of as a linear combination of this basis is called the Fourier expansion of the vector , and the coefficients are called the Fourier coefficients of .   "
},
{
  "id": "sec-orthogonality-4-7",
  "level": "2",
  "url": "sec-orthogonality.html#sec-orthogonality-4-7",
  "type": "Activity",
  "number": "5.1.4",
  "title": "",
  "body": "  Let be a vector in . Find the Fourier expansion of as a linear combination of the orthogonal basis given in .    We need to find the Fourier coefficients for . In we already computed the lengths of the elements of the basis, namely, that . We now calculate the dot products: Therefore, the Fourier coefficients are: The Fourier expansion of in the basis is therefore .   "
},
{
  "id": "sec-orthogonal-complements-and-projections",
  "level": "1",
  "url": "sec-orthogonal-complements-and-projections.html",
  "type": "Section",
  "number": "5.2",
  "title": "Orthogonalization and Projections",
  "body": " Orthogonalization and Projections   Gram-Schmidt Orthogonalization   Expanding an Orthogonal Set   Let be an orthogonal set in . Given in , write Then:  for  If , then and is an orthogonal set.      For convenience, let for each . Given , we calculate that Since is an orthogonal set, for all . So This proves the first property of the lemma. To prove the second, we note that if was zero, then  would be in the span of the vectors . So if is not in the span, then can not be equal to zero. And we have proved is orthogonal to the vectors , so that is an orthogonal set.      Use to extend the orthogonal set in to an orthogonal basis , where , using the vector as in that lemma.    We calculate that Using , we define .    As a consequence of we obtain the following result:   The Gram-Schmidt Orthogonalization Algorithm   Let be a subspace of . Then has an orthogonal basis.  Given a basis of , we can iteratively define an orthogonal basis of by defining and so on, i.e. for defining . Then  is an orthogonal basis of .  for each .        Find an orthogonal basis of (recall ), where .    Let be the three rows of , written in order from top to bottom, and apply the Gram-Schmidt algorithm. We start by writing . We then write , and then write . The vectors are an orthogonal basis of .      Orthogonal Projections   The Orthogonal Complement of a Subspace   If is a subspace of , the orthogonal complement of is the subset of given by       The following properties of the orthogonal complement hold:  For any subspace of , is a subspace of  and  If , then        Find if in .    The third property of implies that a vector lies in if and only if it is orthogonal to both and . The set is then precisely the set of satisfying the system of linear equations and . This system has a single basic solution , and so any vector in is a multiple of this vector, i.e. .     The Orthogonal Projection Onto a Subspace   Let be a subspace of . Then the orthogonal projection of the vector onto is the vector which is closest to , in the sense that for any with , .      The following theorem gives us a practical way to calculate orthogonal projections.     Projection Theorem   Let be a subspace of with orthogonal basis . Then for , the following properties hold:   .   .      If is an orthogonal basis for , and we define , then is eveidently a linear combination of the basis , so . And states that . Thus if and , the Pythagorean theorem ( ) tells us that . Since , we find that , and taking square roots gives that . Thus the vector we have defined is equal to . Since we have already verified that is in , the theorem follows.      Find where and in .    The vectors and are already orthogonal, as . They thus form an orthogonal basis for . We calculate the following values: Using , we calculate that .      Find the point in the plane defined by the equation , which is closest to the point .    The plane can be viewed as a subspace of . We can find a basis for the subspace by taking the basis solutions of the equation, i.e. and , though it is more convenient to work with the integer vectors and obtained by scaling these vectors. Applying the Gram-Schmidt orthogonalization process, we find an orthogonal basis for . The first vector in the orthogonal basis is , and the second vector is . Again, it is convenient to rescale our basis so they have integer coordinates, i.e. setting and . The projection of onto is thus given by      .     "
},
{
  "id": "lemma-6-2-orthogonal",
  "level": "2",
  "url": "sec-orthogonal-complements-and-projections.html#lemma-6-2-orthogonal",
  "type": "Lemma",
  "number": "5.2.1",
  "title": "Expanding an Orthogonal Set.",
  "body": " Expanding an Orthogonal Set   Let be an orthogonal set in . Given in , write Then:  for  If , then and is an orthogonal set.      For convenience, let for each . Given , we calculate that Since is an orthogonal set, for all . So This proves the first property of the lemma. To prove the second, we note that if was zero, then  would be in the span of the vectors . So if is not in the span, then can not be equal to zero. And we have proved is orthogonal to the vectors , so that is an orthogonal set.   "
},
{
  "id": "sec-orthogonal-complements-and-projections-2-3",
  "level": "2",
  "url": "sec-orthogonal-complements-and-projections.html#sec-orthogonal-complements-and-projections-2-3",
  "type": "Activity",
  "number": "5.2.1",
  "title": "",
  "body": "  Use to extend the orthogonal set in to an orthogonal basis , where , using the vector as in that lemma.    We calculate that Using , we define .   "
},
{
  "id": "thm-6-2-gram-schmidt",
  "level": "2",
  "url": "sec-orthogonal-complements-and-projections.html#thm-6-2-gram-schmidt",
  "type": "Theorem",
  "number": "5.2.2",
  "title": "The Gram-Schmidt Orthogonalization Algorithm.",
  "body": " The Gram-Schmidt Orthogonalization Algorithm   Let be a subspace of . Then has an orthogonal basis.  Given a basis of , we can iteratively define an orthogonal basis of by defining and so on, i.e. for defining . Then  is an orthogonal basis of .  for each .     "
},
{
  "id": "sec-orthogonal-complements-and-projections-2-6",
  "level": "2",
  "url": "sec-orthogonal-complements-and-projections.html#sec-orthogonal-complements-and-projections-2-6",
  "type": "Activity",
  "number": "5.2.2",
  "title": "",
  "body": "  Find an orthogonal basis of (recall ), where .    Let be the three rows of , written in order from top to bottom, and apply the Gram-Schmidt algorithm. We start by writing . We then write , and then write . The vectors are an orthogonal basis of .   "
},
{
  "id": "def-orthogonal-complement",
  "level": "2",
  "url": "sec-orthogonal-complements-and-projections.html#def-orthogonal-complement",
  "type": "Definition",
  "number": "5.2.3",
  "title": "The Orthogonal Complement of a Subspace.",
  "body": " The Orthogonal Complement of a Subspace   If is a subspace of , the orthogonal complement of is the subset of given by    "
},
{
  "id": "thm-6-2-orthogonal-complement-properties",
  "level": "2",
  "url": "sec-orthogonal-complements-and-projections.html#thm-6-2-orthogonal-complement-properties",
  "type": "Theorem",
  "number": "5.2.4",
  "title": "",
  "body": "  The following properties of the orthogonal complement hold:  For any subspace of , is a subspace of  and  If , then     "
},
{
  "id": "subsec-orthogonal-projections-4",
  "level": "2",
  "url": "sec-orthogonal-complements-and-projections.html#subsec-orthogonal-projections-4",
  "type": "Activity",
  "number": "5.2.3",
  "title": "",
  "body": "  Find if in .    The third property of implies that a vector lies in if and only if it is orthogonal to both and . The set is then precisely the set of satisfying the system of linear equations and . This system has a single basic solution , and so any vector in is a multiple of this vector, i.e. .   "
},
{
  "id": "def-orthogonal-projection",
  "level": "2",
  "url": "sec-orthogonal-complements-and-projections.html#def-orthogonal-projection",
  "type": "Definition",
  "number": "5.2.5",
  "title": "The Orthogonal Projection Onto a Subspace.",
  "body": " The Orthogonal Projection Onto a Subspace   Let be a subspace of . Then the orthogonal projection of the vector onto is the vector which is closest to , in the sense that for any with , .   "
},
{
  "id": "subsec-orthogonal-projections-6",
  "level": "2",
  "url": "sec-orthogonal-complements-and-projections.html#subsec-orthogonal-projections-6",
  "type": "Remark",
  "number": "5.2.6",
  "title": "",
  "body": "  The following theorem gives us a practical way to calculate orthogonal projections.   "
},
{
  "id": "thm-6-2projection",
  "level": "2",
  "url": "sec-orthogonal-complements-and-projections.html#thm-6-2projection",
  "type": "Theorem",
  "number": "5.2.7",
  "title": "Projection Theorem.",
  "body": " Projection Theorem   Let be a subspace of with orthogonal basis . Then for , the following properties hold:   .   .      If is an orthogonal basis for , and we define , then is eveidently a linear combination of the basis , so . And states that . Thus if and , the Pythagorean theorem ( ) tells us that . Since , we find that , and taking square roots gives that . Thus the vector we have defined is equal to . Since we have already verified that is in , the theorem follows.   "
},
{
  "id": "subsec-orthogonal-projections-8",
  "level": "2",
  "url": "sec-orthogonal-complements-and-projections.html#subsec-orthogonal-projections-8",
  "type": "Activity",
  "number": "5.2.4",
  "title": "",
  "body": "  Find where and in .    The vectors and are already orthogonal, as . They thus form an orthogonal basis for . We calculate the following values: Using , we calculate that .   "
},
{
  "id": "subsec-orthogonal-projections-9",
  "level": "2",
  "url": "sec-orthogonal-complements-and-projections.html#subsec-orthogonal-projections-9",
  "type": "Activity",
  "number": "5.2.5",
  "title": "",
  "body": "  Find the point in the plane defined by the equation , which is closest to the point .    The plane can be viewed as a subspace of . We can find a basis for the subspace by taking the basis solutions of the equation, i.e. and , though it is more convenient to work with the integer vectors and obtained by scaling these vectors. Applying the Gram-Schmidt orthogonalization process, we find an orthogonal basis for . The first vector in the orthogonal basis is , and the second vector is . Again, it is convenient to rescale our basis so they have integer coordinates, i.e. setting and . The projection of onto is thus given by      .   "
},
{
  "id": "sec-QR-factorization",
  "level": "1",
  "url": "sec-QR-factorization.html",
  "type": "Section",
  "number": "5.3",
  "title": "<span class=\"process-math\">\\(QR\\)<\/span> Factorization",
  "body": " Factorization   QR-Factorization  Recall the definition of an orthogonal matrix from , and the notion of an upper triangular matrix from .    Let be an matrix with independent columns. A QR-factorization of is an matrix , with orthogonal columns, and an invertible upper triangular matrix , with positive entries on it's diagonal, so that .      Let . Check that the columns are orthonormal and compute .    Column 1:   Column 2:   Orthogonality:   Compute :       Solve the linear system where     For an upper triangular matrix like , we can solve the system using back-substitution. Starting with the last equation:   Now substitute this value into the second equation:   Finally, substitute both known values into the first equation:   The solution is .    The QR-factorization is a matrix version of the Gram-Schmidt orthogonalization process , which has many applications in many numerical algorithms.    Every matrix with linearly independent columns has a QR-factorization .    Let be the matrix with columns . Apply Gram-Schmidt process to obtain orthogonal vectors where: and for .  Let for each . Then are orthonormal vectors.  We can rewrite each column as a linear combination of the : , and so on. This gives us the matrix factorization:   So where has orthonormal columns and is upper triangular with positive diagonal entries.      Consider the matrix . Find its QR-factorization.    The columns of are and .  Set . Then .  Compute .  Compute :        Compute .  Compute .  Calculate the entries of :   Therefore, where:       Find the QR-factorization of the matrix .    The columns of are and .   ,                  Therefore, where:       Every square, invertible matrix can be written as , where is an orthogonal matrix, and is an upper triangular matrix with positive diagonal entries.     "
},
{
  "id": "subsec-qr-definition-3",
  "level": "2",
  "url": "sec-QR-factorization.html#subsec-qr-definition-3",
  "type": "Definition",
  "number": "5.3.1",
  "title": "",
  "body": "  Let be an matrix with independent columns. A QR-factorization of is an matrix , with orthogonal columns, and an invertible upper triangular matrix , with positive entries on it's diagonal, so that .   "
},
{
  "id": "subsec-qr-definition-4",
  "level": "2",
  "url": "sec-QR-factorization.html#subsec-qr-definition-4",
  "type": "Activity",
  "number": "5.3.1",
  "title": "",
  "body": "  Let . Check that the columns are orthonormal and compute .    Column 1:   Column 2:   Orthogonality:   Compute :    "
},
{
  "id": "subsec-qr-definition-5",
  "level": "2",
  "url": "sec-QR-factorization.html#subsec-qr-definition-5",
  "type": "Activity",
  "number": "5.3.2",
  "title": "",
  "body": "  Solve the linear system where     For an upper triangular matrix like , we can solve the system using back-substitution. Starting with the last equation:   Now substitute this value into the second equation:   Finally, substitute both known values into the first equation:   The solution is .   "
},
{
  "id": "subsec-qr-definition-7",
  "level": "2",
  "url": "sec-QR-factorization.html#subsec-qr-definition-7",
  "type": "Theorem",
  "number": "5.3.2",
  "title": "",
  "body": "  Every matrix with linearly independent columns has a QR-factorization .    Let be the matrix with columns . Apply Gram-Schmidt process to obtain orthogonal vectors where: and for .  Let for each . Then are orthonormal vectors.  We can rewrite each column as a linear combination of the : , and so on. This gives us the matrix factorization:   So where has orthonormal columns and is upper triangular with positive diagonal entries.   "
},
{
  "id": "subsec-qr-definition-8",
  "level": "2",
  "url": "sec-QR-factorization.html#subsec-qr-definition-8",
  "type": "Activity",
  "number": "5.3.3",
  "title": "",
  "body": "  Consider the matrix . Find its QR-factorization.    The columns of are and .  Set . Then .  Compute .  Compute :        Compute .  Compute .  Calculate the entries of :   Therefore, where:    "
},
{
  "id": "subsec-qr-definition-9",
  "level": "2",
  "url": "sec-QR-factorization.html#subsec-qr-definition-9",
  "type": "Activity",
  "number": "5.3.4",
  "title": "",
  "body": "  Find the QR-factorization of the matrix .    The columns of are and .   ,                  Therefore, where:    "
},
{
  "id": "subsec-qr-definition-10",
  "level": "2",
  "url": "sec-QR-factorization.html#subsec-qr-definition-10",
  "type": "Theorem",
  "number": "5.3.3",
  "title": "",
  "body": "  Every square, invertible matrix can be written as , where is an orthogonal matrix, and is an upper triangular matrix with positive diagonal entries.   "
},
{
  "id": "sec-inner-product-spaces",
  "level": "1",
  "url": "sec-inner-product-spaces.html",
  "type": "Section",
  "number": "5.4",
  "title": "Inner Product Spaces",
  "body": " Inner Product Spaces   The theory we have explored in the last chapter holds more generally in (finite-dimensional) inner product spaces. We will not restate the results here, but rather give a few examples that occur in practice.    Inner Product Spaces  First, we define inner product spaces.   Inner Products   Let be a vector space. An inner product on is a function that assigns to each ordered pair of vectors , in a real number  satisfying the following properties:  for all in .  for all in .  for all and in and in .  for all in .    The vector space together with is called an inner product space .      For an inner product on a vector space , the following additional properties automatically hold:  for any in .  for any in , and in .   if and only if .      The dot product on is an inner product. We will often call the dot product the standard inner product .    Let be vectors in , and define Show this definition satisfies the 4th property of , i.e. that for .    We calculate that This quantity can only be zero if and . But this is only possible if and , i.e. .      Let be the standard basis for , and let be any inner product on . Let and consider the matrix . Then  is a symmetric matrix .  for all in .        Given an inner product on , the symmetric matrix analyzed in is called the Gram matrix associated with the inner product.      If a symmetric matrix satisfies for all , then defines an inner product on . Moreover, these are the only symmetric matrices that define inner products. They are called positive definite matrices .     Positive Definite Matrices   An matrix is positive definite if it is symmetric, and if for all .      Consider the inner product on defined by . Find such that .    We employ . We compute that if , then   Therefore, .     The Norm of a Vector   In an inner product space, the norm of a vector is The distance between two vectors and in an inner product space is      Unit Vectors   A vector in an inner product space is called a unit vector if . This is equivalent to the equation . The set of all unit vectors in is called the unit sphere in .      If is a nonzero vector of an inner product space, then is the unique unit vector that is a positive multiple of . We often say that is the unit vector in the same direction as .     Orthogonal Vectors   Two vectors and in an inner product space are orthogonal if .      Spaces of polynomials    Let be the vector space of all polynomials of degree at most . Define . Does this definition define an inner product on ?    Let be arbitrary polynomials in .  We begin by checking that property (a) of the definition of an inner product holds, i.e. that . Indeed, . To verify that property (b) holds, we check that . We calculate that To verify that property (c) holds, we must check that for any scalar , . We calculate that . To verify that property (d) holds, we must check that if . But . This quantity is positive unless and , and these equations only hold simultaneously when and , i.e. when . Thus property (d) holds. Therefore the definition of the map defined above is an inner product.      Consider with the inner product .    Calculate the norm of the polynomial .   We calculate that . Therefore, .    Calculate the distance between and .   We calculate that , so . Therefore, .    Find the unit vector in the same direction as .   We calculated in . Therefore, the unit vector in the same direction as is the polynomial     Are and orthogonal polynomials in ?   To determine if the two polynomials are orthogonal, we must check whether . We calculate that   So the polynomials and are orthogonal to one another.      Spaces of matrices   The Trace of a Matrix   The trace of a square matrix , denoted by , is the sum of its diagonal entries. For , we have       For any matrices and , .      Consider , and let be matrices in . Define .    Find for , .   We calculate that Thus .    Show that the map defined above is an inner product.   We verify each of the four properties that define an inner product. Let be arbitrary matrices:  (a) We calculate that So .  (b) We calculate that So .  (c) We calculate that . So .  (d) For with , The diagonal elements are: , and so is precisely the sum of the squares of the entries of , which is always non-negative, and positive when at least one entry is non-zero. Thus for .    Find the distance between the two matrices .   We recall that . We begin by calculating . Next, we calculate that . Thus . Therefore, .    Find a value for so that the two matrices are orthogonal.   We calculate that . So . Now precisely when , and so this is precisely the value of which makes the matrices and orthogonal.     "
},
{
  "id": "sec-inner-product-spaces-3-3",
  "level": "2",
  "url": "sec-inner-product-spaces.html#sec-inner-product-spaces-3-3",
  "type": "Definition",
  "number": "5.4.1",
  "title": "Inner Products.",
  "body": " Inner Products   Let be a vector space. An inner product on is a function that assigns to each ordered pair of vectors , in a real number  satisfying the following properties:  for all in .  for all in .  for all and in and in .  for all in .    The vector space together with is called an inner product space .   "
},
{
  "id": "thm-7-4-inner-product-properties",
  "level": "2",
  "url": "sec-inner-product-spaces.html#thm-7-4-inner-product-properties",
  "type": "Theorem",
  "number": "5.4.2",
  "title": "",
  "body": "  For an inner product on a vector space , the following additional properties automatically hold:  for any in .  for any in , and in .   if and only if .     "
},
{
  "id": "sec-inner-product-spaces-3-5",
  "level": "2",
  "url": "sec-inner-product-spaces.html#sec-inner-product-spaces-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard inner product "
},
{
  "id": "sec-inner-product-spaces-3-6",
  "level": "2",
  "url": "sec-inner-product-spaces.html#sec-inner-product-spaces-3-6",
  "type": "Activity",
  "number": "5.4.1",
  "title": "",
  "body": "  Let be vectors in , and define Show this definition satisfies the 4th property of , i.e. that for .    We calculate that This quantity can only be zero if and . But this is only possible if and , i.e. .   "
},
{
  "id": "thm-7-4-inner-product-in-coordinates",
  "level": "2",
  "url": "sec-inner-product-spaces.html#thm-7-4-inner-product-in-coordinates",
  "type": "Theorem",
  "number": "5.4.3",
  "title": "",
  "body": "  Let be the standard basis for , and let be any inner product on . Let and consider the matrix . Then  is a symmetric matrix .  for all in .     "
},
{
  "id": "def-6-4-gram-matrix",
  "level": "2",
  "url": "sec-inner-product-spaces.html#def-6-4-gram-matrix",
  "type": "Definition",
  "number": "5.4.4",
  "title": "",
  "body": "  Given an inner product on , the symmetric matrix analyzed in is called the Gram matrix associated with the inner product.   "
},
{
  "id": "sec-inner-product-spaces-3-9",
  "level": "2",
  "url": "sec-inner-product-spaces.html#sec-inner-product-spaces-3-9",
  "type": "Remark",
  "number": "5.4.5",
  "title": "",
  "body": "  If a symmetric matrix satisfies for all , then defines an inner product on . Moreover, these are the only symmetric matrices that define inner products. They are called positive definite matrices .   "
},
{
  "id": "def-6-4-positive-definite",
  "level": "2",
  "url": "sec-inner-product-spaces.html#def-6-4-positive-definite",
  "type": "Definition",
  "number": "5.4.6",
  "title": "Positive Definite Matrices.",
  "body": " Positive Definite Matrices   An matrix is positive definite if it is symmetric, and if for all .   "
},
{
  "id": "sec-inner-product-spaces-3-11",
  "level": "2",
  "url": "sec-inner-product-spaces.html#sec-inner-product-spaces-3-11",
  "type": "Activity",
  "number": "5.4.2",
  "title": "",
  "body": "  Consider the inner product on defined by . Find such that .    We employ . We compute that if , then   Therefore, .   "
},
{
  "id": "sec-inner-product-spaces-3-12",
  "level": "2",
  "url": "sec-inner-product-spaces.html#sec-inner-product-spaces-3-12",
  "type": "Definition",
  "number": "5.4.7",
  "title": "The Norm of a Vector.",
  "body": " The Norm of a Vector   In an inner product space, the norm of a vector is The distance between two vectors and in an inner product space is    "
},
{
  "id": "sec-inner-product-spaces-3-13",
  "level": "2",
  "url": "sec-inner-product-spaces.html#sec-inner-product-spaces-3-13",
  "type": "Definition",
  "number": "5.4.8",
  "title": "Unit Vectors.",
  "body": " Unit Vectors   A vector in an inner product space is called a unit vector if . This is equivalent to the equation . The set of all unit vectors in is called the unit sphere in .   "
},
{
  "id": "sec-inner-product-spaces-3-14",
  "level": "2",
  "url": "sec-inner-product-spaces.html#sec-inner-product-spaces-3-14",
  "type": "Theorem",
  "number": "5.4.9",
  "title": "",
  "body": "  If is a nonzero vector of an inner product space, then is the unique unit vector that is a positive multiple of . We often say that is the unit vector in the same direction as .   "
},
{
  "id": "sec-inner-product-spaces-3-15",
  "level": "2",
  "url": "sec-inner-product-spaces.html#sec-inner-product-spaces-3-15",
  "type": "Definition",
  "number": "5.4.10",
  "title": "Orthogonal Vectors.",
  "body": " Orthogonal Vectors   Two vectors and in an inner product space are orthogonal if .   "
},
{
  "id": "subsec-spaces-of-polynomials-2",
  "level": "2",
  "url": "sec-inner-product-spaces.html#subsec-spaces-of-polynomials-2",
  "type": "Activity",
  "number": "5.4.3",
  "title": "",
  "body": "  Let be the vector space of all polynomials of degree at most . Define . Does this definition define an inner product on ?    Let be arbitrary polynomials in .  We begin by checking that property (a) of the definition of an inner product holds, i.e. that . Indeed, . To verify that property (b) holds, we check that . We calculate that To verify that property (c) holds, we must check that for any scalar , . We calculate that . To verify that property (d) holds, we must check that if . But . This quantity is positive unless and , and these equations only hold simultaneously when and , i.e. when . Thus property (d) holds. Therefore the definition of the map defined above is an inner product.   "
},
{
  "id": "subsec-spaces-of-polynomials-3",
  "level": "2",
  "url": "sec-inner-product-spaces.html#subsec-spaces-of-polynomials-3",
  "type": "Activity",
  "number": "5.4.4",
  "title": "",
  "body": "  Consider with the inner product .    Calculate the norm of the polynomial .   We calculate that . Therefore, .    Calculate the distance between and .   We calculate that , so . Therefore, .    Find the unit vector in the same direction as .   We calculated in . Therefore, the unit vector in the same direction as is the polynomial     Are and orthogonal polynomials in ?   To determine if the two polynomials are orthogonal, we must check whether . We calculate that   So the polynomials and are orthogonal to one another.   "
},
{
  "id": "subsec-spaces-of-matrices-2",
  "level": "2",
  "url": "sec-inner-product-spaces.html#subsec-spaces-of-matrices-2",
  "type": "Definition",
  "number": "5.4.11",
  "title": "The Trace of a Matrix.",
  "body": " The Trace of a Matrix   The trace of a square matrix , denoted by , is the sum of its diagonal entries. For , we have    "
},
{
  "id": "subsec-spaces-of-matrices-3",
  "level": "2",
  "url": "sec-inner-product-spaces.html#subsec-spaces-of-matrices-3",
  "type": "Theorem",
  "number": "5.4.12",
  "title": "",
  "body": "  For any matrices and , .   "
},
{
  "id": "subsec-spaces-of-matrices-4",
  "level": "2",
  "url": "sec-inner-product-spaces.html#subsec-spaces-of-matrices-4",
  "type": "Activity",
  "number": "5.4.5",
  "title": "",
  "body": "  Consider , and let be matrices in . Define .    Find for , .   We calculate that Thus .    Show that the map defined above is an inner product.   We verify each of the four properties that define an inner product. Let be arbitrary matrices:  (a) We calculate that So .  (b) We calculate that So .  (c) We calculate that . So .  (d) For with , The diagonal elements are: , and so is precisely the sum of the squares of the entries of , which is always non-negative, and positive when at least one entry is non-zero. Thus for .    Find the distance between the two matrices .   We recall that . We begin by calculating . Next, we calculate that . Thus . Therefore, .    Find a value for so that the two matrices are orthogonal.   We calculate that . So . Now precisely when , and so this is precisely the value of which makes the matrices and orthogonal.   "
},
{
  "id": "sec-eigenvalues-eigenvectors-diagonalization",
  "level": "1",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html",
  "type": "Section",
  "number": "6.1",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors   Basic definitions    Let be an matrix. Suppose is a nonzero vector in and is a scalar (which could be ) such that . Then is an eigenvalue of , and an eigenvector of associated with the eigenvalue  .      Check that are eigenvectors for the matrix , and find the corresponding eigenvalues.    We plug in into the matrix , and calculate that . Since , the vector is an eigenvector of associated with the eigenvalue .  Next, we plug in , and check that . Since , is an eigenvector of associated with the eigenvalue .      Let be a matrix. Find the eigenvalues and eigenvectors of .    We need to solve the equation , where both and are unknown.  The equation is equivalent to the equation . For each , in order for this equation to have a non-trivial solution , the matrix must be singular, i.e. . This allows us to temporarily eliminate from the problem, determining the values of that have solutions .  We calculate that Thus holds precisely when , i.e. when or , and so these two values are the two eigenvalues of . It remains to find the eigenvectors for each of the eigenvalues.  We now find the non-trivial solutions to the equation for and . Each of these is a linear system that can be solved, either using the methods of , or more ad hoc methods, which may be faster since the matrices we are dealing with are small.  For , we calculate that . Thus the solutions to are given by , or . Thus the solutions to this equation are given by non-zero multiples of the basic solution . These are all eigenvectors of with eigenvalue .  For , we calculate that . Thus the solutions to are those vectors such that , and so the eigenvectors for with eigenvalue are given by non-zero multiples of the basic solution .  To conclude, the two eigenvalues of the matrix are and . The set of all eigenvectors of associated with the eigenvalue is given by the expression , and the set of eigenvectors of associated with the eigenvalue is given by .      Let be an matrix. Then is called the characteristic polynomial of and is sometimes denoted . The equation is called the characteristic equation of .      Let be an matrix. The eigenvalues of are the roots of the characteristic polynomial of .      Some authors define the characteristic polynomial to be rather than . The advantage of the definition chosen in these notes is that the characteristic polynomial is always monic , i.e. the coefficient associated with the highest power of is always equal to one. The zeroes of the two polynomials are both the same, and as we saw in , they are the eigenvalues of .      Find the characteristic polynomial of if .    We calculate that The characteristic polynomial is therefore      Finding eigenvalues and eigenvectors of a matrix     Determine the roots of the characteristic polynomial . These are the eigenvalues of .    For each eigenvalue , find all nontrivial solutions to the homogeneous system . These are the eigenvectors of associated with .        A basic solution (recall ) to the homogeneous equation will be called a basic eigenvector associated with the eigenvalue .      Do not make the common mistake of first transforming to RREF and then finding the eigenvalues and eigenvectors of the RREF matrix. Row operations on the matrix  do not preserve the set of basic solutions. They only preserve solutions to the homogeneous equation .    If is an eigenvector of a matrix with eigenvalue , then any nonzero scalar multiple of is also an eigenvector with the same eigenvalue . Indeed, if for some scalar , then:   Put differently, the entire line is invariant under the transformation defined by , with every vector in this line being stretched (or compressed) by the factor .    Any non-zero linear combination of eigenvectors associated with the same eigenvalue is also an eigenvector with eigenvalue . Conversely, all eigenvectors associated with the eigenvalue can be written uniquely as a linear combinations of the basic eigenvectors associated with the eigenvalue .      Find the eigenvalues and basic eigenvectors of the matrix .    We begin by calculating the characteristic polynomial of , i.e. Since this matrix is upper triangular, the determinant is the product of the diagonal entries, and so the characteristic polynomial is . The polynomial has only a single zero, i.e. , and so is the only eigenvalue of .  To find the basic eigenvectors of with eigenvalue , we solve the system , i.e. Thus the solutions are given by , with and as free variables. The set of basic eigenvectors is thus given by .      Diagonalization    An matrix is called diagonalizable if there exists an invertible matrix so that is a diagonal matrix (recall ). The matrix is called a diagonalizing matrix for .    Note that if is a diagonal matrix with diagonal entries , then for each standard basis vector (recall ) . Multiplying this equation by on the left hand side and setting we obtain that . Thus is an eigenvector of the matrix associated with the eigenvalue . Conversely,   Suppose .   Compute where . You may use the fact that . What does this computation say about the matrix ?   We start by calculating that and thus that Since is a diagonal matrix, the matrix is diagonalizable.    Use the previous computation to determine the eigenvalues of .   We calculate that . Thus is the set of eigenvalues of .    Use the previous computation to calculate .   Let's start by computing smaller powers of . We find that and Continuing this calculation, noticing the pattern, we conclude that .  Multiplying diagonal matrices is easy, i.e. . Thus . We use this computation to compute , i.e. we calculate that and thus that .    The previous activity shows why diagonalizing a matrix may be useful. But given a matrix , how do we potentially find such that is a diagonal matrix?    Suppose for some diagonal matrix . Let be the columns of . Note that the equation holds if and only if .    What happens when I take ?    Matrix multiplication gives us: So is the matrix whose columns are the vectors scaled by their corresponding values.    Calculate and in terms of the vectors , the scalars and the matrix .   When we take , we compute that .  When we calculate , we compute that .    So what conditions on and are necessary and sufficient for the equatino to hold?   For the equation to hold, we need for each . Thus we need each column of to be an eigenvector of , whose eigenvalue is the corresponding entry of the diagonal matrix .      An matrix is diagonalizable if and only if has eigenvectors such that the matrix with columns is invertible. In this case, , where is a diagonal matrix such that the elements of on the main diagonal are the eigenvalues of .      Recalling , the matrix in is invertible if and only if the vectors form a basis for .    If has a basis of eigenvectors with corresponding eigenvalues , then every vector can be written as a linear combination of these eigenvectors, i.e. there exists constants such that . Thus In other words,  stretches the components of along each eigenvector by the corresponding eigenvalue.    Consider the matrix . Verify that are eigenvectors of corresponding to different eigenvalues. What are the eigenvalues?    We compute that and . Therefore, is an eigenvector with eigenvalue and is an eigenvector with eigenvalue .     illustrates the effect of the matrix from on a grid in . In particular, it highlights an important geometric interpretation of eigenvectors and eigenvalues; when we apply the linear transformation defined by matrix to any vector in , the eigenvectors define special directions in which the transformation acts simply by scaling in those directions.   Visualization of the action of matrix from on a grid. The red line along the eigenvector is unchanged, because is an eigenvector with eigenvalue , whereas the blue line along eigenvector is stretched by a factor of 2, because is an eigenvector with eigenvalue .     Non-Diagonalizable Matrices   Consider the rotation matrix where is not a multiple of . For any nonzero vector , the vector is obtained by rotating counter-clockwise by an angle , and so is never on the line spanned by , i.e. it is never true that the equation for any , and any non-zero .  Thus the matrix has no eigenvectors or eigenvalues. It therefore is a matrix that is not diagonalizable. This makes geometric sense: we cannot find special directions in so that the action of rotating vectors in the plane is obtained by stretching in those special directions.     illustrates why not every matrix is diagonalizable. A matrix is diagonalizable precisely when it has a basis of eigenvectors, but this is not always possible.    Let . Is diagonalizable?    We need to check if has a basis of eigenvectors. In , we showed that has eigenvectors . The two vectors are linearly independent as they are not parallel, and thus form a basis for . Therefore, is diagonalizable.      Let . Is diagonalizable?    We start by calculating the characteristic polynomial of , that . Thus is the only eigenvalue of .  To find the eigenvectors of , we solve the equation , which we expand as . The equation has only a single basic solution, i.e. . Recalling , every eigenvector of is a scalar multiple of this vector. So cannot have a basis of eigenvectors, and so is not diagonalizable.     "
},
{
  "id": "subsec-basic-definitions-2",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#subsec-basic-definitions-2",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "  Let be an matrix. Suppose is a nonzero vector in and is a scalar (which could be ) such that . Then is an eigenvalue of , and an eigenvector of associated with the eigenvalue  .   "
},
{
  "id": "subsec-basic-definitions-3",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#subsec-basic-definitions-3",
  "type": "Activity",
  "number": "6.1.1",
  "title": "",
  "body": "  Check that are eigenvectors for the matrix , and find the corresponding eigenvalues.    We plug in into the matrix , and calculate that . Since , the vector is an eigenvector of associated with the eigenvalue .  Next, we plug in , and check that . Since , is an eigenvector of associated with the eigenvalue .   "
},
{
  "id": "act-7-1-find-eigenvalues",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#act-7-1-find-eigenvalues",
  "type": "Activity",
  "number": "6.1.2",
  "title": "",
  "body": "  Let be a matrix. Find the eigenvalues and eigenvectors of .    We need to solve the equation , where both and are unknown.  The equation is equivalent to the equation . For each , in order for this equation to have a non-trivial solution , the matrix must be singular, i.e. . This allows us to temporarily eliminate from the problem, determining the values of that have solutions .  We calculate that Thus holds precisely when , i.e. when or , and so these two values are the two eigenvalues of . It remains to find the eigenvectors for each of the eigenvalues.  We now find the non-trivial solutions to the equation for and . Each of these is a linear system that can be solved, either using the methods of , or more ad hoc methods, which may be faster since the matrices we are dealing with are small.  For , we calculate that . Thus the solutions to are given by , or . Thus the solutions to this equation are given by non-zero multiples of the basic solution . These are all eigenvectors of with eigenvalue .  For , we calculate that . Thus the solutions to are those vectors such that , and so the eigenvectors for with eigenvalue are given by non-zero multiples of the basic solution .  To conclude, the two eigenvalues of the matrix are and . The set of all eigenvectors of associated with the eigenvalue is given by the expression , and the set of eigenvectors of associated with the eigenvalue is given by .   "
},
{
  "id": "def-7-1-char-polynomial",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#def-7-1-char-polynomial",
  "type": "Definition",
  "number": "6.1.2",
  "title": "",
  "body": "  Let be an matrix. Then is called the characteristic polynomial of and is sometimes denoted . The equation is called the characteristic equation of .   "
},
{
  "id": "subsec-basic-definitions-6",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#subsec-basic-definitions-6",
  "type": "Theorem",
  "number": "6.1.3",
  "title": "",
  "body": "  Let be an matrix. The eigenvalues of are the roots of the characteristic polynomial of .   "
},
{
  "id": "subsec-basic-definitions-7",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#subsec-basic-definitions-7",
  "type": "Remark",
  "number": "6.1.4",
  "title": "",
  "body": "  Some authors define the characteristic polynomial to be rather than . The advantage of the definition chosen in these notes is that the characteristic polynomial is always monic , i.e. the coefficient associated with the highest power of is always equal to one. The zeroes of the two polynomials are both the same, and as we saw in , they are the eigenvalues of .   "
},
{
  "id": "subsec-basic-definitions-8",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#subsec-basic-definitions-8",
  "type": "Activity",
  "number": "6.1.3",
  "title": "",
  "body": "  Find the characteristic polynomial of if .    We calculate that The characteristic polynomial is therefore    "
},
{
  "id": "subsec-basic-definitions-10",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#subsec-basic-definitions-10",
  "type": "Definition",
  "number": "6.1.5",
  "title": "",
  "body": "  A basic solution (recall ) to the homogeneous equation will be called a basic eigenvector associated with the eigenvalue .   "
},
{
  "id": "subsec-basic-definitions-11",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#subsec-basic-definitions-11",
  "type": "Warning",
  "number": "6.1.6",
  "title": "",
  "body": "  Do not make the common mistake of first transforming to RREF and then finding the eigenvalues and eigenvectors of the RREF matrix. Row operations on the matrix  do not preserve the set of basic solutions. They only preserve solutions to the homogeneous equation .   "
},
{
  "id": "fact-7-1-every-eigenvector-basic",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#fact-7-1-every-eigenvector-basic",
  "type": "Fact",
  "number": "6.1.7",
  "title": "",
  "body": "  Any non-zero linear combination of eigenvectors associated with the same eigenvalue is also an eigenvector with eigenvalue . Conversely, all eigenvectors associated with the eigenvalue can be written uniquely as a linear combinations of the basic eigenvectors associated with the eigenvalue .   "
},
{
  "id": "subsec-basic-definitions-15",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#subsec-basic-definitions-15",
  "type": "Activity",
  "number": "6.1.4",
  "title": "",
  "body": "  Find the eigenvalues and basic eigenvectors of the matrix .    We begin by calculating the characteristic polynomial of , i.e. Since this matrix is upper triangular, the determinant is the product of the diagonal entries, and so the characteristic polynomial is . The polynomial has only a single zero, i.e. , and so is the only eigenvalue of .  To find the basic eigenvectors of with eigenvalue , we solve the system , i.e. Thus the solutions are given by , with and as free variables. The set of basic eigenvectors is thus given by .   "
},
{
  "id": "subsec-diagonalization-2",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#subsec-diagonalization-2",
  "type": "Definition",
  "number": "6.1.8",
  "title": "",
  "body": "  An matrix is called diagonalizable if there exists an invertible matrix so that is a diagonal matrix (recall ). The matrix is called a diagonalizing matrix for .   "
},
{
  "id": "subsec-diagonalization-4",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#subsec-diagonalization-4",
  "type": "Activity",
  "number": "6.1.5",
  "title": "",
  "body": " Suppose .   Compute where . You may use the fact that . What does this computation say about the matrix ?   We start by calculating that and thus that Since is a diagonal matrix, the matrix is diagonalizable.    Use the previous computation to determine the eigenvalues of .   We calculate that . Thus is the set of eigenvalues of .    Use the previous computation to calculate .   Let's start by computing smaller powers of . We find that and Continuing this calculation, noticing the pattern, we conclude that .  Multiplying diagonal matrices is easy, i.e. . Thus . We use this computation to compute , i.e. we calculate that and thus that .   "
},
{
  "id": "act-7-1-construction-of-diagonalizable",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#act-7-1-construction-of-diagonalizable",
  "type": "Activity",
  "number": "6.1.6",
  "title": "",
  "body": "  Suppose for some diagonal matrix . Let be the columns of . Note that the equation holds if and only if .    What happens when I take ?    Matrix multiplication gives us: So is the matrix whose columns are the vectors scaled by their corresponding values.    Calculate and in terms of the vectors , the scalars and the matrix .   When we take , we compute that .  When we calculate , we compute that .    So what conditions on and are necessary and sufficient for the equatino to hold?   For the equation to hold, we need for each . Thus we need each column of to be an eigenvector of , whose eigenvalue is the corresponding entry of the diagonal matrix .   "
},
{
  "id": "thm-7-1-diagonalizability",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#thm-7-1-diagonalizability",
  "type": "Theorem",
  "number": "6.1.9",
  "title": "",
  "body": "  An matrix is diagonalizable if and only if has eigenvectors such that the matrix with columns is invertible. In this case, , where is a diagonal matrix such that the elements of on the main diagonal are the eigenvalues of .   "
},
{
  "id": "subsec-diagonalization-8",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#subsec-diagonalization-8",
  "type": "Remark",
  "number": "6.1.10",
  "title": "",
  "body": "  Recalling , the matrix in is invertible if and only if the vectors form a basis for .   "
},
{
  "id": "ex-eigenvector-verification",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#ex-eigenvector-verification",
  "type": "Activity",
  "number": "6.1.7",
  "title": "",
  "body": "  Consider the matrix . Verify that are eigenvectors of corresponding to different eigenvalues. What are the eigenvalues?    We compute that and . Therefore, is an eigenvector with eigenvalue and is an eigenvector with eigenvalue .   "
},
{
  "id": "fig-7-1-eigenvector-transformation",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#fig-7-1-eigenvector-transformation",
  "type": "Figure",
  "number": "6.1.11",
  "title": "",
  "body": " Visualization of the action of matrix from on a grid. The red line along the eigenvector is unchanged, because is an eigenvector with eigenvalue , whereas the blue line along eigenvector is stretched by a factor of 2, because is an eigenvector with eigenvalue .   "
},
{
  "id": "rem-non-diagonalizable-matrices",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#rem-non-diagonalizable-matrices",
  "type": "Remark",
  "number": "6.1.12",
  "title": "Non-Diagonalizable Matrices.",
  "body": " Non-Diagonalizable Matrices   Consider the rotation matrix where is not a multiple of . For any nonzero vector , the vector is obtained by rotating counter-clockwise by an angle , and so is never on the line spanned by , i.e. it is never true that the equation for any , and any non-zero .  Thus the matrix has no eigenvectors or eigenvalues. It therefore is a matrix that is not diagonalizable. This makes geometric sense: we cannot find special directions in so that the action of rotating vectors in the plane is obtained by stretching in those special directions.   "
},
{
  "id": "act-diagonalizable-check-1",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#act-diagonalizable-check-1",
  "type": "Activity",
  "number": "6.1.8",
  "title": "",
  "body": "  Let . Is diagonalizable?    We need to check if has a basis of eigenvectors. In , we showed that has eigenvectors . The two vectors are linearly independent as they are not parallel, and thus form a basis for . Therefore, is diagonalizable.   "
},
{
  "id": "act-diagonalizable-check-2",
  "level": "2",
  "url": "sec-eigenvalues-eigenvectors-diagonalization.html#act-diagonalizable-check-2",
  "type": "Activity",
  "number": "6.1.9",
  "title": "",
  "body": "  Let . Is diagonalizable?    We start by calculating the characteristic polynomial of , that . Thus is the only eigenvalue of .  To find the eigenvectors of , we solve the equation , which we expand as . The equation has only a single basic solution, i.e. . Recalling , every eigenvector of is a scalar multiple of this vector. So cannot have a basis of eigenvectors, and so is not diagonalizable.   "
},
{
  "id": "sec-orthogonal-diagonalization",
  "level": "1",
  "url": "sec-orthogonal-diagonalization.html",
  "type": "Section",
  "number": "6.2",
  "title": "Diagonalization of Symmetric Matrices",
  "body": " Diagonalization of Symmetric Matrices   In this section, we discuss a theory of diagonalization that applies to any symmetric matrix (recall ). Symmetric matrices play a fundamental role in many applications of linear algebra. One key example we have encountered previously in the Gram matrix (see ).    Orthogonality of Eigenvectors  A key property of symmetric matrices is that for any two vectors and , . Indeed, we calculate that This property leads to a fundamental result about the eigenvectors of symmetric matrices.   Orthogonality of Eigenvectors   If is a symmetric matrix , then the eigenvectors of corresponding to distinct eigenvalues are orthogonal .    Let and , where . Using the property above: This gives us . Since , we must have , which means the eigenvectors are orthogonal.    As we will see, it turns out that for any symmetric matrix, there exists a pairwise orthogonal set of eigenvectors which form a basis of . In particular, every symmetric matrix is diagonalizable.    Orthogonal Matrices and Orthogonal Diagonalization  Recall the definition of an orthogonal matrix from .   Equivalent Conditions for Orthogonal Matrices   Let be an matrix. Then the following conditions are equivalent to one another:  is invertible and .  The rows of are orthonormal.  The columns of are orthonormal.      Let us start by showing the first property is equivalent to the third. Suppose is invertible, and . Let be the columns of . Recall from that the -entry of is equal to the dot product . Since , , and so for , , and for each , . Thus the column vectors are orthonormal. Conversely, if the column vectors are orthonormal, then we immediately see that .  The proof that the first property is equivalent to the second is very similar, using the rows of rather than the columns and that if , then , and vice versa.      Let be an orthogonal matrix. Then:   preserves dot products, i.e. for any vector , .   preserves lengths, i.e. for any vector , .      Let and be column vectors. Recalling the fifth property of , we calculate that . Thus preserves dot products.  Next, using that preserves dot products, and also , we find . Taking square roots on both sides of this equation gives .     provides a visualization of an orthogonal transformation.   The effect of applying the linear transformation to a cube, where is orthogonal. Notice that the transformation is rigid , i.e. applying the transformation to the cube results in a cube with the same dimensions.     Orthogonal Diagonalizability   A matrix is orthogonally diagonalizable when an orthogonal matrix  can be found such that is a diagonal matrix. Since , this is equivalent to being a diagonal matrix.      Consider the symmetric matrix Check that the vectors are eigenvectors of which are orthogonal to each other. What are the corresponding eigenvalues?    The vectors and are eigenvectors of with eigenvalues and respectively, since and We also calculate that . Thus the two vectors and are orthogonal.     Visualization of the action of matrix from on a grid. The red line along eigenvector is unchanged (since is an eigenvector with eigenvalue 1), while the blue line along eigenvector is stretched by a factor of 3 (since is an eigenvector with eigenvalue 3).     should be compared to . Notice that since the matrix in is symmetric, the red and blue line in meet at right angles, since the vectors and are orthogonal, whereas the red and blue lines in do not meet at right angles, sicne the eigenvectors for that example are not orthogonal to one another.    Consider the matrix . Find an orthogonal matrix such that is diagonal.    We proceed as in , i.e. finding a basis of eigenvectors of , and defining by taking those columns as eigenvectors. By , as long as the eigenvectors are orthonormal, the matrix will be orthogonal. We start by finding the eigenvalues of , by computing the characteristic polynomial. We calculate that . The solutions to are thus given by , and so and are the two eigenvalues of .  To calculate an eigenvector with eigenvalue , we solve the system . Expanding the left hand side and reading off the second entry of the resulting vector gives that . Since the entries of the first column are distinct, we immediately see that the first column will contain a pivot when we row-reduce the matrix on the left hand side of this equation, and thus (since the matrix is not invertible), will be a free variable when specifying the set of solutions. Setting , we obtain the basic eigenvector . We are looking for an orthonormal basis of eigenvectors, and so in particular, the eigenvectors we choose as a basis must all have length . We thus consider a multiple of the basic eigenvector which has length . Since the basic eigenvector has length The vector has length . This will be the first vector in our basis.  With a similar technique, one may find the basic eigenvector with eigenvalue . It is the vector . Normalizing gives the vector , which has length . This is the second vector in our basis.  Using , since is symmetric, and are orthogonal, and thus, by , are linearly independent, thus forming a basis. But this means that the matrix is orthogonal, and is diagonal.      Suppose that is orthogonally diagonalizable, i.e. we can find an orthogonal matrix so that , where is diagonal. Then .    We calculate that .      The factorization writes as a product of three matrices: an orthogonal matrix, a diagonal matrix, and the transpose of the orthogonal matrix. This product is sometimes called the spectral decomposition of a symmetric matrix .      Principal Axes Theorem  Recall . That theorem tells us that if is orthogonally diagonalizable, where is diagonal, then the columns of must be linearly independent eigenvectors of . In addition, in order for to be orthogonal, tells us that the eigenvectors which form the columns of must be orthonormal.  Remarkably, all symmetric matrices are orthogonally diagonalizable.   Principal Axes Theorem   Let be any matrix. Then the following conditions are equivalent:  has an orthonormal set of eigenvectors  is orthogonally diagonalizable  is symmetric  A set of orthonormal eigenvectors for a symmetric matrix is called a set of principal axes for .    We do not prove the hard part of the theorem (that the third property implies the second). But the proof that the second property implies the third is more simple (see ).       is also called The Spectral Theorem for symmetric matrices (the set of eigenvalues of a matrix is often called the spectrum of the matrix).    We do not prove the \"hard\" part of this theorem, that is, that (3) implies (2). Let's however check that (2) implies (3).    Show that if is orthogonally diagonalizable, then is symmetric.    Suppose is orthogonally diagonalizable. Then there exists an orthogonal matrix and a diagonal matrix such that . tells us that . But now we check that . The equation means precisely that is symmetric.      Let Find an orthogonal matrix such that is diagonal.    First, compute the eigenvalues. We calculate that This calculation verifies that the eigenvalues of are , , and . Now we proceed to find an eigenvector for each of these eigenvalues.  For the eigenvalue , we solve the equation , which we expand as By observation, we see that the first and second columns will contain pivots in the reduced row echelon form of the matrix in the left hand side, so setting gives the basic eigenvector . Normalizing gives the normalized eigenvector , which will be the first vector in our basis.  For the eigenvalue , we solve the equation , which we expand as We now see that first and third columns will contain pivots when we row reduce this matrix, so setting and solving gives the basic eigenvector . Normalizing gives the eigenvector . This will be the second vector in our basis.  For , we solve , i.e. Solving this system gives the basic eigenvector . Multiplying by (to prevent working with fractions) gies the integer eigenvector Normalizing gives the eigenvector . This will be the third and final vector in our basis.  We now set . Then . We have thus found an orthogonal diagonalization of the matrix .    In , the eigenvalues of were distinct. To come up with a general strategy to obtain an orthogonal diagonalization, we need to make one further observation.   Eigenspaces of a Matrix   Suppose is a square matrix. Then for any scalar , the set is called the eigenspace of corresponding to .      Suppose is a square matrix and . Then is a subspace of .    Note that precisely when solves the equation . Thus is precisely the null space of the matrix , and the theorem follows from .     Procedure For Orthogonally Diagonalizing a Symmetric Matrix    Find the eigenvalues of .  For each eigenvalue of , find a basis for , and convert it to an orthonormal basis using the Gram-Schmidt orthogonalization process (see ) if necessary.  Collecting the orthonormal bases for each of the eigenspaces gives an orthonormal basis of eigenvector for . Taking these eigenvectors as column vectors of a matrix gives an orthonormal matrix such that is diagonal.       If compute an orthonormal diagonalization of . You may use the fact that the characteristic polynomial of is , and the null space of is spanned by the vector .    The eigenvalues are and . Since the null space of is spanned by the vector , the eigenvectors of with eigenvalue are all multiples of this vector. Thus an orthonormal basis for is given by . On the other hand, to find an orthonormal basis for we form the matrix . Using the row operations and , we obtain the reduced row echelon form for the matrix : the matrix . We thus obtain the two basic solutions . We now apply Gram-Schmidt to this pair of vectors, which form a basis of , in order to obtain an orthogonal basis. We define . We calculate that and thus that . Normalizing gives the orthonormal basis for .  Combining the two orthonormal bases we have calculated gives an orthonormal basis of consisting of eigenvectors, and so if we define , then gives an orthogonal diagonalization of .    The fact that every symmetric matrix is diagonalizable can often be used to determine structural properties of such matrices. For instance, consider the theorem below, recalling the notion of a positive definite matrix from .    A symmetric matrix is positive definite if and only if all eigenvalues of are strictly positive.    By , we can write , where is an orthogonal matrix, and is a diagonal matrix. Then if , This quantity is positive for all , or equivalently, since is invertible, for all , if and only if .     "
},
{
  "id": "thm-orthogonality-eigenvectors",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#thm-orthogonality-eigenvectors",
  "type": "Theorem",
  "number": "6.2.1",
  "title": "Orthogonality of Eigenvectors.",
  "body": " Orthogonality of Eigenvectors   If is a symmetric matrix , then the eigenvectors of corresponding to distinct eigenvalues are orthogonal .    Let and , where . Using the property above: This gives us . Since , we must have , which means the eigenvectors are orthogonal.   "
},
{
  "id": "thm-equivalent-conditions-orthogonal",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#thm-equivalent-conditions-orthogonal",
  "type": "Theorem",
  "number": "6.2.2",
  "title": "Equivalent Conditions for Orthogonal Matrices.",
  "body": " Equivalent Conditions for Orthogonal Matrices   Let be an matrix. Then the following conditions are equivalent to one another:  is invertible and .  The rows of are orthonormal.  The columns of are orthonormal.      Let us start by showing the first property is equivalent to the third. Suppose is invertible, and . Let be the columns of . Recall from that the -entry of is equal to the dot product . Since , , and so for , , and for each , . Thus the column vectors are orthonormal. Conversely, if the column vectors are orthonormal, then we immediately see that .  The proof that the first property is equivalent to the second is very similar, using the rows of rather than the columns and that if , then , and vice versa.   "
},
{
  "id": "lem-orthogonal-matrix-properties",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#lem-orthogonal-matrix-properties",
  "type": "Lemma",
  "number": "6.2.3",
  "title": "",
  "body": "  Let be an orthogonal matrix. Then:   preserves dot products, i.e. for any vector , .   preserves lengths, i.e. for any vector , .      Let and be column vectors. Recalling the fifth property of , we calculate that . Thus preserves dot products.  Next, using that preserves dot products, and also , we find . Taking square roots on both sides of this equation gives .   "
},
{
  "id": "fig-orthogonal-transformation",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#fig-orthogonal-transformation",
  "type": "Figure",
  "number": "6.2.4",
  "title": "",
  "body": " The effect of applying the linear transformation to a cube, where is orthogonal. Notice that the transformation is rigid , i.e. applying the transformation to the cube results in a cube with the same dimensions.   "
},
{
  "id": "def-orthogonal-diagonalizability",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#def-orthogonal-diagonalizability",
  "type": "Definition",
  "number": "6.2.5",
  "title": "Orthogonal Diagonalizability.",
  "body": " Orthogonal Diagonalizability   A matrix is orthogonally diagonalizable when an orthogonal matrix  can be found such that is a diagonal matrix. Since , this is equivalent to being a diagonal matrix.   "
},
{
  "id": "ex-symmetric-matrix-2x2",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#ex-symmetric-matrix-2x2",
  "type": "Activity",
  "number": "6.2.1",
  "title": "",
  "body": "  Consider the symmetric matrix Check that the vectors are eigenvectors of which are orthogonal to each other. What are the corresponding eigenvalues?    The vectors and are eigenvectors of with eigenvalues and respectively, since and We also calculate that . Thus the two vectors and are orthogonal.   "
},
{
  "id": "fig-matrix-transformation",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#fig-matrix-transformation",
  "type": "Figure",
  "number": "6.2.6",
  "title": "",
  "body": " Visualization of the action of matrix from on a grid. The red line along eigenvector is unchanged (since is an eigenvector with eigenvalue 1), while the blue line along eigenvector is stretched by a factor of 3 (since is an eigenvector with eigenvalue 3).   "
},
{
  "id": "act-find-orthogonal-matrix",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#act-find-orthogonal-matrix",
  "type": "Activity",
  "number": "6.2.2",
  "title": "",
  "body": "  Consider the matrix . Find an orthogonal matrix such that is diagonal.    We proceed as in , i.e. finding a basis of eigenvectors of , and defining by taking those columns as eigenvectors. By , as long as the eigenvectors are orthonormal, the matrix will be orthogonal. We start by finding the eigenvalues of , by computing the characteristic polynomial. We calculate that . The solutions to are thus given by , and so and are the two eigenvalues of .  To calculate an eigenvector with eigenvalue , we solve the system . Expanding the left hand side and reading off the second entry of the resulting vector gives that . Since the entries of the first column are distinct, we immediately see that the first column will contain a pivot when we row-reduce the matrix on the left hand side of this equation, and thus (since the matrix is not invertible), will be a free variable when specifying the set of solutions. Setting , we obtain the basic eigenvector . We are looking for an orthonormal basis of eigenvectors, and so in particular, the eigenvectors we choose as a basis must all have length . We thus consider a multiple of the basic eigenvector which has length . Since the basic eigenvector has length The vector has length . This will be the first vector in our basis.  With a similar technique, one may find the basic eigenvector with eigenvalue . It is the vector . Normalizing gives the vector , which has length . This is the second vector in our basis.  Using , since is symmetric, and are orthogonal, and thus, by , are linearly independent, thus forming a basis. But this means that the matrix is orthogonal, and is diagonal.   "
},
{
  "id": "ex-orthogonal-diagonalization-factorization",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#ex-orthogonal-diagonalization-factorization",
  "type": "Activity",
  "number": "6.2.3",
  "title": "",
  "body": "  Suppose that is orthogonally diagonalizable, i.e. we can find an orthogonal matrix so that , where is diagonal. Then .    We calculate that .   "
},
{
  "id": "subsec-basic-concepts-13",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#subsec-basic-concepts-13",
  "type": "Remark",
  "number": "6.2.7",
  "title": "",
  "body": "  The factorization writes as a product of three matrices: an orthogonal matrix, a diagonal matrix, and the transpose of the orthogonal matrix. This product is sometimes called the spectral decomposition of a symmetric matrix .   "
},
{
  "id": "thm-principal-axes",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#thm-principal-axes",
  "type": "Theorem",
  "number": "6.2.8",
  "title": "Principal Axes Theorem.",
  "body": " Principal Axes Theorem   Let be any matrix. Then the following conditions are equivalent:  has an orthonormal set of eigenvectors  is orthogonally diagonalizable  is symmetric  A set of orthonormal eigenvectors for a symmetric matrix is called a set of principal axes for .    We do not prove the hard part of the theorem (that the third property implies the second). But the proof that the second property implies the third is more simple (see ).   "
},
{
  "id": "subsec-principal-axes-theorem-5",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#subsec-principal-axes-theorem-5",
  "type": "Remark",
  "number": "6.2.9",
  "title": "",
  "body": "   is also called The Spectral Theorem for symmetric matrices (the set of eigenvalues of a matrix is often called the spectrum of the matrix).   "
},
{
  "id": "ex-orthogonal-diag-implies-symmetric",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#ex-orthogonal-diag-implies-symmetric",
  "type": "Activity",
  "number": "6.2.4",
  "title": "",
  "body": "  Show that if is orthogonally diagonalizable, then is symmetric.    Suppose is orthogonally diagonalizable. Then there exists an orthogonal matrix and a diagonal matrix such that . tells us that . But now we check that . The equation means precisely that is symmetric.   "
},
{
  "id": "act-3x3-orthogonal-diagonalization",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#act-3x3-orthogonal-diagonalization",
  "type": "Activity",
  "number": "6.2.5",
  "title": "",
  "body": "  Let Find an orthogonal matrix such that is diagonal.    First, compute the eigenvalues. We calculate that This calculation verifies that the eigenvalues of are , , and . Now we proceed to find an eigenvector for each of these eigenvalues.  For the eigenvalue , we solve the equation , which we expand as By observation, we see that the first and second columns will contain pivots in the reduced row echelon form of the matrix in the left hand side, so setting gives the basic eigenvector . Normalizing gives the normalized eigenvector , which will be the first vector in our basis.  For the eigenvalue , we solve the equation , which we expand as We now see that first and third columns will contain pivots when we row reduce this matrix, so setting and solving gives the basic eigenvector . Normalizing gives the eigenvector . This will be the second vector in our basis.  For , we solve , i.e. Solving this system gives the basic eigenvector . Multiplying by (to prevent working with fractions) gies the integer eigenvector Normalizing gives the eigenvector . This will be the third and final vector in our basis.  We now set . Then . We have thus found an orthogonal diagonalization of the matrix .   "
},
{
  "id": "subsec-principal-axes-theorem-10",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#subsec-principal-axes-theorem-10",
  "type": "Definition",
  "number": "6.2.10",
  "title": "Eigenspaces of a Matrix.",
  "body": " Eigenspaces of a Matrix   Suppose is a square matrix. Then for any scalar , the set is called the eigenspace of corresponding to .   "
},
{
  "id": "subsec-principal-axes-theorem-11",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#subsec-principal-axes-theorem-11",
  "type": "Theorem",
  "number": "6.2.11",
  "title": "",
  "body": "  Suppose is a square matrix and . Then is a subspace of .    Note that precisely when solves the equation . Thus is precisely the null space of the matrix , and the theorem follows from .   "
},
{
  "id": "subsec-principal-axes-theorem-13",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#subsec-principal-axes-theorem-13",
  "type": "Activity",
  "number": "6.2.6",
  "title": "",
  "body": "  If compute an orthonormal diagonalization of . You may use the fact that the characteristic polynomial of is , and the null space of is spanned by the vector .    The eigenvalues are and . Since the null space of is spanned by the vector , the eigenvectors of with eigenvalue are all multiples of this vector. Thus an orthonormal basis for is given by . On the other hand, to find an orthonormal basis for we form the matrix . Using the row operations and , we obtain the reduced row echelon form for the matrix : the matrix . We thus obtain the two basic solutions . We now apply Gram-Schmidt to this pair of vectors, which form a basis of , in order to obtain an orthogonal basis. We define . We calculate that and thus that . Normalizing gives the orthonormal basis for .  Combining the two orthonormal bases we have calculated gives an orthonormal basis of consisting of eigenvectors, and so if we define , then gives an orthogonal diagonalization of .   "
},
{
  "id": "thm-7-2-diagonalization",
  "level": "2",
  "url": "sec-orthogonal-diagonalization.html#thm-7-2-diagonalization",
  "type": "Theorem",
  "number": "6.2.12",
  "title": "",
  "body": "  A symmetric matrix is positive definite if and only if all eigenvalues of are strictly positive.    By , we can write , where is an orthogonal matrix, and is a diagonal matrix. Then if , This quantity is positive for all , or equivalently, since is invertible, for all , if and only if .   "
},
{
  "id": "sec-singular-value-decomposition",
  "level": "1",
  "url": "sec-singular-value-decomposition.html",
  "type": "Section",
  "number": "6.3",
  "title": "The Singular Value Decomposition",
  "body": " The Singular Value Decomposition  Recall , which gives a visualization of the action of a matrix in terms of it's orthogonal diagonalization. The Singular Value Decomposition (the SVD ) is a powerful generalization of the diagonalization guaranteed by , that works for all matrices, of any size, rather than just symmetric square matrices. Rather than writing a square matrix as , where is an orthogonal basis and is a diagonal matrix, the singular value decomposition writes an matrix of any size as , where is an orthogonal matrix, is an orthogonal matrix, and is a diagonal matrix with non-negative entries (recall the definition of a diagonal matrix of any size given in ).  Recall that the diagonalization of a symmetric matrix is equivalent to finding an orthonormal basis of eigenvectors such that . Recalling , it is not possible to diagonalize a general square matrix. The Singular Value Decomposition of a matrix instead is equivalent to finding a pair of orthonormal bases and so that for , for each , for scalars which are called the singular values of , and if , for .  Geometrically, the SVD gives another point of view about how a matrix transforms space. Recall that the absolute values of the eigenvalues of a square symmetric matrix measure the amount of stretching of space along the directions spanned by the eigenvetors of the matrix. In the singular value decomposition of a matrix , the singular value measures the maximum amount of stretching of the matrix , which occurs along the vectors and .  More precisely, we can write . Since is symmetric, it can be orthogonally diagonalized, and the maximum value of (subject to the normalization ) is the largest eigenvalue of , which equals to . Moreover, this maximization occurs when . The other singular vectors gives the other directions of stretching.  This property (among others) makes the singular value decomposition one of the most important tools in applied linear algebra, with applications ranging from data compression and image processing to statistical analysis.  An matrix maps the unit sphere (the set of all unit vectors) in to an ellipsoid in (i.e., a sphere which has been stretched and compressed along different principal axes ). The singular value decomposition identifies the principal axes of this ellipsoid and the corresponding scaling factors. gives an example of how this may be visualized when is a matrix.   A transformation from to corresponding to the matrix . The unit sphere in (on the left) is mapped to an ellipse in (on the right). From: Linear Algebra and Its Applications (6e) by Lay, McDonald, Lay     Properties of and   Let be an matrix. Then:  The eigenvalues of and are real and non-negative.  and have the same set of positive eigenvalues.      1. The Matrices and are symmetric, so by their eigenvalues are real. If for , we calculate that Since and , we conclude that .  2. Let be a positive eigenvalue of with eigenvector . Then . Let . Note that since . We have: So is also an eigenvalue of . The argument works in reverse by replacing with , proving that and have the same positive eigenvalues.     Computing the Singular Value Decomposition   Given an matrix , we can obtain a SVD of of the form as follows:  Let be the eigenvalues of with corresponding (orthonormal) eigenvectors . Reorder the (if necessary) to ensure that the nonzero eigenvalues are and if .  Let be the rank of the matrix .  Define .  Define for . Then is orthonormal in , so (using Gram-Schmidt or otherwise) extend the set to an orthonormal basis in .  Define .  The singular values for are where for each . The nonzero singular values are , and we define .         We start by justifying that is the rank of the matrix , and that the vectors are orthogonal. For , since is an orthonormal set, . The vectors for are zero, since implies .  Let be any vector. Since is a basis of , we can write for some scalars . Then: Thus . Since is a subspace, and are in , we have equality. Since is an orthogonal set, it is linearly independent, and thus a basis of . So , since .  Now we prove that we have obtained a singular value decomposition of . We compute that   Recall that for . Therefore   Since is orthogonal, , and therefore multiplying the identity by on the right, we conclude that .      The Singular Value Decomposition of a matrix is not unique. Any matrix factorization with the same properties ( and are orthogonal and is diagonal with non-negative, non-increasing diagonal entries) is also called an SVD. The same results hold for any SVD, e.g., that the number of positive singular values is equal to the rank of .      Find a singular value decomposition of the matrix . Use this decomposition to compute the eigenvalues and eigenvectors of .    We compute that Now we diagonalize . We compute the characteristic polynomial of the matrix, i.e. . Thus the eigenvalues of are and . For , we solve the equation , i.e. , which has a basic solution . Since we need a unit vector, we take . For , we solve , and obtain that , which has a basic solution . Renormalizing to obtain a unit vector, we obtain that . The vectors are the columns of the orthogonal matrix .  Next, we compute the quantities and vectors . We have and . So . We have Normalizing we obtain the first column of , i.e. The other vectors and can be obtained by taking any pair of vectors orthonormal to . Applying Gram-Schmidt to , to obtain an orthogonal basis , we set , to a scalar multiple of , i.e. setting , and then defining to be a scalar multiple of , i.e. setting . Normalizing these vectors, we obtain the vectors  and . We thus define , we define , and  .   It turns out that any singular value decomposition contains a great deal of information about an matrix and the subspaces associated with .   Fundamental Subspaces   The four fundamental subspaces corresponding to a matrix are:  The row space .  The column space .  The null space .  The null space of , i.e. .       Relations Between Singular Value Decomposition and Fundamental Subspaces   Let be an matrix, and let be a singular value decomposition for . Let , where , with . Let and be the columns of and respectively. Then   is an orthonormal basis of .   is an orthonormal basis of .   is an orthonormal basis of .   is an orthonormal basis of .      "
},
{
  "id": "sec-singular-value-decomposition-7",
  "level": "2",
  "url": "sec-singular-value-decomposition.html#sec-singular-value-decomposition-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "principal axes "
},
{
  "id": "fig-unit-sphere-to-ellipse",
  "level": "2",
  "url": "sec-singular-value-decomposition.html#fig-unit-sphere-to-ellipse",
  "type": "Figure",
  "number": "6.3.1",
  "title": "",
  "body": " A transformation from to corresponding to the matrix . The unit sphere in (on the left) is mapped to an ellipse in (on the right). From: Linear Algebra and Its Applications (6e) by Lay, McDonald, Lay   "
},
{
  "id": "lemma-properties-ata-aat",
  "level": "2",
  "url": "sec-singular-value-decomposition.html#lemma-properties-ata-aat",
  "type": "Lemma",
  "number": "6.3.2",
  "title": "Properties of <span class=\"process-math\">\\(A^TA\\)<\/span> and <span class=\"process-math\">\\(AA^T\\)<\/span>.",
  "body": " Properties of and   Let be an matrix. Then:  The eigenvalues of and are real and non-negative.  and have the same set of positive eigenvalues.      1. The Matrices and are symmetric, so by their eigenvalues are real. If for , we calculate that Since and , we conclude that .  2. Let be a positive eigenvalue of with eigenvector . Then . Let . Note that since . We have: So is also an eigenvalue of . The argument works in reverse by replacing with , proving that and have the same positive eigenvalues.   "
},
{
  "id": "theorem-svd",
  "level": "2",
  "url": "sec-singular-value-decomposition.html#theorem-svd",
  "type": "Theorem",
  "number": "6.3.3",
  "title": "Computing the Singular Value Decomposition.",
  "body": " Computing the Singular Value Decomposition   Given an matrix , we can obtain a SVD of of the form as follows:  Let be the eigenvalues of with corresponding (orthonormal) eigenvectors . Reorder the (if necessary) to ensure that the nonzero eigenvalues are and if .  Let be the rank of the matrix .  Define .  Define for . Then is orthonormal in , so (using Gram-Schmidt or otherwise) extend the set to an orthonormal basis in .  Define .  The singular values for are where for each . The nonzero singular values are , and we define .         We start by justifying that is the rank of the matrix , and that the vectors are orthogonal. For , since is an orthonormal set, . The vectors for are zero, since implies .  Let be any vector. Since is a basis of , we can write for some scalars . Then: Thus . Since is a subspace, and are in , we have equality. Since is an orthogonal set, it is linearly independent, and thus a basis of . So , since .  Now we prove that we have obtained a singular value decomposition of . We compute that   Recall that for . Therefore   Since is orthogonal, , and therefore multiplying the identity by on the right, we conclude that .   "
},
{
  "id": "sec-singular-value-decomposition-11",
  "level": "2",
  "url": "sec-singular-value-decomposition.html#sec-singular-value-decomposition-11",
  "type": "Remark",
  "number": "6.3.4",
  "title": "",
  "body": "  The Singular Value Decomposition of a matrix is not unique. Any matrix factorization with the same properties ( and are orthogonal and is diagonal with non-negative, non-increasing diagonal entries) is also called an SVD. The same results hold for any SVD, e.g., that the number of positive singular values is equal to the rank of .   "
},
{
  "id": "activity-svd-example",
  "level": "2",
  "url": "sec-singular-value-decomposition.html#activity-svd-example",
  "type": "Activity",
  "number": "6.3.1",
  "title": "",
  "body": "  Find a singular value decomposition of the matrix . Use this decomposition to compute the eigenvalues and eigenvectors of .    We compute that Now we diagonalize . We compute the characteristic polynomial of the matrix, i.e. . Thus the eigenvalues of are and . For , we solve the equation , i.e. , which has a basic solution . Since we need a unit vector, we take . For , we solve , and obtain that , which has a basic solution . Renormalizing to obtain a unit vector, we obtain that . The vectors are the columns of the orthogonal matrix .  Next, we compute the quantities and vectors . We have and . So . We have Normalizing we obtain the first column of , i.e. The other vectors and can be obtained by taking any pair of vectors orthonormal to . Applying Gram-Schmidt to , to obtain an orthogonal basis , we set , to a scalar multiple of , i.e. setting , and then defining to be a scalar multiple of , i.e. setting . Normalizing these vectors, we obtain the vectors  and . We thus define , we define , and  .  "
},
{
  "id": "def-fundamental-subspaces",
  "level": "2",
  "url": "sec-singular-value-decomposition.html#def-fundamental-subspaces",
  "type": "Definition",
  "number": "6.3.5",
  "title": "Fundamental Subspaces.",
  "body": " Fundamental Subspaces   The four fundamental subspaces corresponding to a matrix are:  The row space .  The column space .  The null space .  The null space of , i.e. .     "
},
{
  "id": "sec-singular-value-decomposition-15",
  "level": "2",
  "url": "sec-singular-value-decomposition.html#sec-singular-value-decomposition-15",
  "type": "Theorem",
  "number": "6.3.6",
  "title": "Relations Between Singular Value Decomposition and Fundamental Subspaces.",
  "body": " Relations Between Singular Value Decomposition and Fundamental Subspaces   Let be an matrix, and let be a singular value decomposition for . Let , where , with . Let and be the columns of and respectively. Then   is an orthonormal basis of .   is an orthonormal basis of .   is an orthonormal basis of .   is an orthonormal basis of .     "
},
{
  "id": "sec-8-1-general-concepts",
  "level": "1",
  "url": "sec-8-1-general-concepts.html",
  "type": "Section",
  "number": "7.1",
  "title": "Vector-Valued Functions",
  "body": " Vector-Valued Functions  We now begin our study of the calculus of multivariable functions , i.e. functions of more than one scalar variable. You've likely studied the calculus of functions of a single variable, but many real-world applications of calculus involve the study of functions depending on multiple varying quantities.   A vector-valued function from to , is a function from to , typically denoted . A scalar-valued function is a function , i.e. a vector-valued function from to with . Any vector-valued function can be expressed in terms of  component functions , or coordinate functions , the scalar-valued functions such that . More generally, vector-valued and scalar-valued functions may only be defined on a subset of vectors in , rather than defined everywhere, i.e. their domain may be a proper subset of .   In other words, a scalar-valued function takes in an input and outputs scalars , and a vector-valued function takes in an input and outputs vectors (recall ).    If is a point in , recall the length of , denoted , from . The length of a vector defines a scalar-valued function from to , i.e. the function which takes in a vector as input and gives the length as output. Show that this function has the property that two different inputs can have the same output. Recall from that we say this function is not injective .    There are many different choices one could make here. For instance, the vector and the vector both have the same length. Other examples are the vectors and .      Let be an matrix. The linear transformation (recall ) defined by is a vector-valued function.    If are the rows of , and are the component functions of , then for each , express the function in terms of the row .   Recalling the definition of matrix vector multiplication from , we can write .    Consider the matrix , which defines a linear transformation . Compute its component functions for a general input , and its output for the specific input .   The component functions are: and . For an input , we compute that .    "
},
{
  "id": "sec-8-1-general-concepts-2",
  "level": "2",
  "url": "sec-8-1-general-concepts.html#sec-8-1-general-concepts-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multivariable functions "
},
{
  "id": "def-8-1-vector-valued-function",
  "level": "2",
  "url": "sec-8-1-general-concepts.html#def-8-1-vector-valued-function",
  "type": "Definition",
  "number": "7.1.1",
  "title": "",
  "body": " A vector-valued function from to , is a function from to , typically denoted . A scalar-valued function is a function , i.e. a vector-valued function from to with . Any vector-valued function can be expressed in terms of  component functions , or coordinate functions , the scalar-valued functions such that . More generally, vector-valued and scalar-valued functions may only be defined on a subset of vectors in , rather than defined everywhere, i.e. their domain may be a proper subset of .  "
},
{
  "id": "sec-8-1-general-concepts-5",
  "level": "2",
  "url": "sec-8-1-general-concepts.html#sec-8-1-general-concepts-5",
  "type": "Activity",
  "number": "7.1.1",
  "title": "",
  "body": "  If is a point in , recall the length of , denoted , from . The length of a vector defines a scalar-valued function from to , i.e. the function which takes in a vector as input and gives the length as output. Show that this function has the property that two different inputs can have the same output. Recall from that we say this function is not injective .    There are many different choices one could make here. For instance, the vector and the vector both have the same length. Other examples are the vectors and .   "
},
{
  "id": "sec-8-1-general-concepts-6",
  "level": "2",
  "url": "sec-8-1-general-concepts.html#sec-8-1-general-concepts-6",
  "type": "Activity",
  "number": "7.1.2",
  "title": "",
  "body": "  Let be an matrix. The linear transformation (recall ) defined by is a vector-valued function.    If are the rows of , and are the component functions of , then for each , express the function in terms of the row .   Recalling the definition of matrix vector multiplication from , we can write .    Consider the matrix , which defines a linear transformation . Compute its component functions for a general input , and its output for the specific input .   The component functions are: and . For an input , we compute that .   "
},
{
  "id": "sec-vector-valued-functions-space-curves",
  "level": "1",
  "url": "sec-vector-valued-functions-space-curves.html",
  "type": "Section",
  "number": "7.2",
  "title": "Calculus of Vector-Valued Functions of a Single Variable",
  "body": " Calculus of Vector-Valued Functions of a Single Variable   Basic definitions  In this section, we discuss vector-valued functions of a single-variable, i.e. vector-valued functions taking elements of as input, and giving elements of as output (recall ). It is more simple to discuss the calculus associated with such functions, because any such function can be studied in terms of it's component functions, and these functions are scalar functions of a single variable studied in single variable calculus.  This class of functions often provide parameterizations of curves in space.  We already encountered parameterizations of curves when discussing parametric equations for straight lines, as in . A line in space passing through a point with direction vector is parameterized by the vector-valued function .    The line passes through point and is parallel to the vector .    Find a parameterization of the line .   The line passes through and has direction vector , and so it parameterized by the function .    Another line passes through the point and is perpendicular to . If also lies in the plane , find a parameterization of .   Since lies in the plane , the -coordinates of all the points of are the same, so any direction vector for must be of the form for some scalars and . Since is perpendicular to , direction vectors for must be perpendicular to direction vectors of , and since has as a direction vector, we find that . Thus .  Any vector solving this equation gives a direction vector of , and so (to obtain integer values of and ) we can pick , and thus . So is a direction vector of , and since passes through , we obtain a parameterization of of the form .    The parameterizations of straight lines given above are given by vector-valued functions whose components are linear functions. But we can also parameterize curves using nonlinear functions.    As we vary over its allowed values, the vector-valued function traces a curve in . We will not graph functions by hand in this course. For example, consider . Then the curve it traces is illustrated below.    The helix traced by the vector-valued function . From Calculus Volume 3 by Strang and Herman       Recall the vectors and in from . Consider the vector-valued function defined by the equation , i.e. the equation .    Evaluate .   We substitute for in the equation above, obtaining that . We can also rewrite the equation as .    Evaluate .   We calculate that . Alternatively, we can write .    Evaluate .   We calculate that . So .     Though it is common in multivariate-calculus classes, in this class we will not spend much time focusing on techniques for sketching curves given a particular parameterization .     Limits and Continuity of Vector-Valued Functions   Limit of a vector-valued function   A vector-valued function approaches the limit  as approaches , written , provided . This is the limit of a scalar-valued function, and can thus be evaluated using the methods of single-variable calculus.    In practice, calculating and simplifying the expression in order to evaluate the limit can be quite cumbersome. Instead, the following theorem allows us to evaluate limits much more easily.   Limit of a Vector-Valued Function   Let be a function with component functions . Then if , and we define the vector , then . Equivalently, .      Calculate for the given vector-valued functions .    The function defined by .   The component functions of the function are and . We calculate that and . Thus by , .    The function defined by .   We calculate that      Continuity of vector-valued functions   A vector-valued function is continuous at point if That is, a vector-valued function is continuous at point when the limit of the function as approaches equals the value of the function at .      A vector-valued function with component functions is continuous at if and only if each of the component functions is continuous at .      Derivatives of Vector-Valued Functions  Now we define the derivative of a vector-valued function from to . This definition closely resembles the definition of the derivative of a scalar-valued function from to in the calculus of a single variable.   Derivative of a vector-valued function   The derivative of a function is provided the limit exists. If exists, then we say is differentiable at . If exists for all in an open interval , then we say is differentiable on . The vector is called the tangent vector of the curve describd by the function at the point .     The derivative of a differentiable function is also a vector-valued function.   As in single variable calculus, we will often have much more efficient methods of calculating the derivative of a function . But you should be able to work directly from the definition in simple examples.    Use the definition to calculate the derivative of the function .    The derivative of the function is given by the expression . As before, we use to evaluate the limit. The two components of the expression are and , and it suffices to calculuate the limits as for each component. For , expanding and canceling out like factors gives that , and so . Similarily, for we can write , and so . We thus conclude that .    Since tells us taking limits of functions from to is equivalent to taking the limits of each component function, taking the derivative of such a function is equivalent to taking the derivative of each component function.    If has components , then is differentiable at if and only if each component function is differentiable at , and .    Because of , we can apply all the techniques from single-variable calculus to differentiate functions from to .    Find , where     Using , we calculate that .    If , then is also a vector-valued function of the same type, so we can consider the second derivatives , i.e. the derivative of the function .    Find , where is as in .    In we calculated that . Applying , we find that .      Differentiation Rules    Suppose are differentiable, is a scalar, and is a scalar-valued function. Then   Sum Rule     Product Rule     Product Rule     Dot Product rule        We prove the dot product rule, in the two dimensional case. Let and let . Then . Applying the sum and product rules for functions from to , we find that .      Find , where and .    We calculate that and . Thus and . So .     Note that in , since is only well-defined for , the function is also only well-defined for , as is it's derivative.    "
},
{
  "id": "sec-vector-valued-functions-space-curves-2-3",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#sec-vector-valued-functions-space-curves-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parameterizations "
},
{
  "id": "sec-vector-valued-functions-space-curves-2-5",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#sec-vector-valued-functions-space-curves-2-5",
  "type": "Activity",
  "number": "7.2.1",
  "title": "",
  "body": "  The line passes through point and is parallel to the vector .    Find a parameterization of the line .   The line passes through and has direction vector , and so it parameterized by the function .    Another line passes through the point and is perpendicular to . If also lies in the plane , find a parameterization of .   Since lies in the plane , the -coordinates of all the points of are the same, so any direction vector for must be of the form for some scalars and . Since is perpendicular to , direction vectors for must be perpendicular to direction vectors of , and since has as a direction vector, we find that . Thus .  Any vector solving this equation gives a direction vector of , and so (to obtain integer values of and ) we can pick , and thus . So is a direction vector of , and since passes through , we obtain a parameterization of of the form .   "
},
{
  "id": "sec-vector-valued-functions-space-curves-2-7",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#sec-vector-valued-functions-space-curves-2-7",
  "type": "Example",
  "number": "7.2.1",
  "title": "",
  "body": "  As we vary over its allowed values, the vector-valued function traces a curve in . We will not graph functions by hand in this course. For example, consider . Then the curve it traces is illustrated below.    The helix traced by the vector-valued function . From Calculus Volume 3 by Strang and Herman    "
},
{
  "id": "sec-vector-valued-functions-space-curves-2-8",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#sec-vector-valued-functions-space-curves-2-8",
  "type": "Activity",
  "number": "7.2.2",
  "title": "",
  "body": "  Recall the vectors and in from . Consider the vector-valued function defined by the equation , i.e. the equation .    Evaluate .   We substitute for in the equation above, obtaining that . We can also rewrite the equation as .    Evaluate .   We calculate that . Alternatively, we can write .    Evaluate .   We calculate that . So .   "
},
{
  "id": "sec-vector-valued-functions-space-curves-2-9",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#sec-vector-valued-functions-space-curves-2-9",
  "type": "Remark",
  "number": "7.2.3",
  "title": "",
  "body": " Though it is common in multivariate-calculus classes, in this class we will not spend much time focusing on techniques for sketching curves given a particular parameterization .  "
},
{
  "id": "sec-vector-valued-functions-space-curves-3-2",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#sec-vector-valued-functions-space-curves-3-2",
  "type": "Definition",
  "number": "7.2.4",
  "title": "Limit of a vector-valued function.",
  "body": " Limit of a vector-valued function   A vector-valued function approaches the limit  as approaches , written , provided . This is the limit of a scalar-valued function, and can thus be evaluated using the methods of single-variable calculus.   "
},
{
  "id": "thm-8-2-limit-of-curve",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#thm-8-2-limit-of-curve",
  "type": "Theorem",
  "number": "7.2.5",
  "title": "Limit of a Vector-Valued Function.",
  "body": " Limit of a Vector-Valued Function   Let be a function with component functions . Then if , and we define the vector , then . Equivalently, .   "
},
{
  "id": "sec-vector-valued-functions-space-curves-3-5",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#sec-vector-valued-functions-space-curves-3-5",
  "type": "Activity",
  "number": "7.2.3",
  "title": "",
  "body": "  Calculate for the given vector-valued functions .    The function defined by .   The component functions of the function are and . We calculate that and . Thus by , .    The function defined by .   We calculate that    "
},
{
  "id": "sec-vector-valued-functions-space-curves-3-6",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#sec-vector-valued-functions-space-curves-3-6",
  "type": "Definition",
  "number": "7.2.6",
  "title": "Continuity of vector-valued functions.",
  "body": " Continuity of vector-valued functions   A vector-valued function is continuous at point if That is, a vector-valued function is continuous at point when the limit of the function as approaches equals the value of the function at .   "
},
{
  "id": "sec-vector-valued-functions-space-curves-3-7",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#sec-vector-valued-functions-space-curves-3-7",
  "type": "Theorem",
  "number": "7.2.7",
  "title": "",
  "body": "  A vector-valued function with component functions is continuous at if and only if each of the component functions is continuous at .   "
},
{
  "id": "sec-vector-valued-functions-space-curves-4-3",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#sec-vector-valued-functions-space-curves-4-3",
  "type": "Definition",
  "number": "7.2.8",
  "title": "Derivative of a vector-valued function.",
  "body": " Derivative of a vector-valued function   The derivative of a function is provided the limit exists. If exists, then we say is differentiable at . If exists for all in an open interval , then we say is differentiable on . The vector is called the tangent vector of the curve describd by the function at the point .   "
},
{
  "id": "sec-vector-valued-functions-space-curves-4-4",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#sec-vector-valued-functions-space-curves-4-4",
  "type": "Remark",
  "number": "7.2.9",
  "title": "",
  "body": " The derivative of a differentiable function is also a vector-valued function.  "
},
{
  "id": "sec-vector-valued-functions-space-curves-4-6",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#sec-vector-valued-functions-space-curves-4-6",
  "type": "Activity",
  "number": "7.2.4",
  "title": "",
  "body": "  Use the definition to calculate the derivative of the function .    The derivative of the function is given by the expression . As before, we use to evaluate the limit. The two components of the expression are and , and it suffices to calculuate the limits as for each component. For , expanding and canceling out like factors gives that , and so . Similarily, for we can write , and so . We thus conclude that .   "
},
{
  "id": "thm-8-2-differentiation-theorem-componets",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#thm-8-2-differentiation-theorem-componets",
  "type": "Theorem",
  "number": "7.2.10",
  "title": "",
  "body": "  If has components , then is differentiable at if and only if each component function is differentiable at , and .   "
},
{
  "id": "act-8-2-calculate-derivative-1",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#act-8-2-calculate-derivative-1",
  "type": "Activity",
  "number": "7.2.5",
  "title": "",
  "body": "  Find , where     Using , we calculate that .   "
},
{
  "id": "sec-vector-valued-functions-space-curves-4-12",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#sec-vector-valued-functions-space-curves-4-12",
  "type": "Activity",
  "number": "7.2.6",
  "title": "",
  "body": "  Find , where is as in .    In we calculated that . Applying , we find that .   "
},
{
  "id": "sec-vector-valued-functions-space-curves-5-2",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#sec-vector-valued-functions-space-curves-5-2",
  "type": "Theorem",
  "number": "7.2.11",
  "title": "",
  "body": "  Suppose are differentiable, is a scalar, and is a scalar-valued function. Then   Sum Rule     Product Rule     Product Rule     Dot Product rule        We prove the dot product rule, in the two dimensional case. Let and let . Then . Applying the sum and product rules for functions from to , we find that .   "
},
{
  "id": "act-8-2-dot-product-exercise",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#act-8-2-dot-product-exercise",
  "type": "Activity",
  "number": "7.2.7",
  "title": "",
  "body": "  Find , where and .    We calculate that and . Thus and . So .   "
},
{
  "id": "sec-vector-valued-functions-space-curves-5-4",
  "level": "2",
  "url": "sec-vector-valued-functions-space-curves.html#sec-vector-valued-functions-space-curves-5-4",
  "type": "Remark",
  "number": "7.2.12",
  "title": "",
  "body": " Note that in , since is only well-defined for , the function is also only well-defined for , as is it's derivative.  "
},
{
  "id": "sec-calculus-of-vector-valued-functions",
  "level": "1",
  "url": "sec-calculus-of-vector-valued-functions.html",
  "type": "Section",
  "number": "7.3",
  "title": "Domains, Ranges, Graphs, and Level Curves",
  "body": " Domains, Ranges, Graphs, and Level Curves   Domain and Range   Domain and Range   The domain of a function is the set of all inputs for that function, and the range is the set of all possible outputs. More formally, if a function takes inputs from a set and outputs elements in a set , then the domain of is the set , and the range is the set of all for which for some , which we might write in set notation as .    In calculus, we often define the domain of a function  implicitly , by defining in terms of an expression, and then letting the domain of be the set of all values which, when substituted into that expression, lead to a well-defined quantity. For instance, we might discuss the function  , by which we mean the function with domain and range .  For a scalar-valued function of two-variables, the domain of is a subset of , and we may can therefore sketch the domain.    Sketch the domains of the following functions:     .   The expression that defines the function consists of the sum of two terms, and so to find the domain of , we must identify where both terms are well defined.  The term is well defined when the input to is positive, i.e. when . We may rearrange this inequality to read   The term is well-defined when the input to is non-negative, i.e. when .  So is well-defined when both and when , and so the domain of is the set of all points such that and . Using set notation, we can also write the domain as the set . The set is the region in the plane bounded from below by the parabola , and on the left by the -axis, as depicted in .   Domain of          The expression defining the function consists of the product of and , and so is well-defined precisely when and are both well-defined. Both expressions are well-defined for all inputs. And so the domain of is the set .        The expression defining is a fraction with numerator and denominator . The expression is therefore well-defined when both the numerator and denominator are well defined, and when the denominator is non-zero.  The numerator is well-defined when . The denominator is well-defined when , and is non-zero when .  So the domain of is the set of all with and , or in set notation, the set . This set is the first quadrant in the -plane, including the positive -axis, but excluding the origin and the positive -axis. See .   Domain of        Graphs and Level Curves   The Graph of a Function   The graph of a function is the set of all pairs , with in the domain of .    When is a scalar-function of two variables, the graph of is a set of triples , and thus a subset of , and can therefore be visualized as a surface. See for a picture of the graph of the function .   A graph of the function .   A graph of a function of two variables.   A graph of the function        Level Curves and Contour Plots   A level curve of a scalar function of two variables is the curve consisting of pairs satisfying the equation , for some . A contour plot is a sketch in depicting level curves of a function for many different values of .    The different values of which are chosen to be depicted in a contour plot are often obtained by varying by a common difference, obtaining consecutive level sets.    Sketch a contour plot for the function by sketching the level curves with , , , and .     Level curves of       "
},
{
  "id": "sec-calculus-of-vector-valued-functions-2-2",
  "level": "2",
  "url": "sec-calculus-of-vector-valued-functions.html#sec-calculus-of-vector-valued-functions-2-2",
  "type": "Definition",
  "number": "7.3.1",
  "title": "Domain and Range.",
  "body": " Domain and Range   The domain of a function is the set of all inputs for that function, and the range is the set of all possible outputs. More formally, if a function takes inputs from a set and outputs elements in a set , then the domain of is the set , and the range is the set of all for which for some , which we might write in set notation as .   "
},
{
  "id": "sec-calculus-of-vector-valued-functions-2-5",
  "level": "2",
  "url": "sec-calculus-of-vector-valued-functions.html#sec-calculus-of-vector-valued-functions-2-5",
  "type": "Activity",
  "number": "7.3.1",
  "title": "",
  "body": "  Sketch the domains of the following functions:     .   The expression that defines the function consists of the sum of two terms, and so to find the domain of , we must identify where both terms are well defined.  The term is well defined when the input to is positive, i.e. when . We may rearrange this inequality to read   The term is well-defined when the input to is non-negative, i.e. when .  So is well-defined when both and when , and so the domain of is the set of all points such that and . Using set notation, we can also write the domain as the set . The set is the region in the plane bounded from below by the parabola , and on the left by the -axis, as depicted in .   Domain of          The expression defining the function consists of the product of and , and so is well-defined precisely when and are both well-defined. Both expressions are well-defined for all inputs. And so the domain of is the set .        The expression defining is a fraction with numerator and denominator . The expression is therefore well-defined when both the numerator and denominator are well defined, and when the denominator is non-zero.  The numerator is well-defined when . The denominator is well-defined when , and is non-zero when .  So the domain of is the set of all with and , or in set notation, the set . This set is the first quadrant in the -plane, including the positive -axis, but excluding the origin and the positive -axis. See .   Domain of     "
},
{
  "id": "sec-calculus-of-vector-valued-functions-3-2",
  "level": "2",
  "url": "sec-calculus-of-vector-valued-functions.html#sec-calculus-of-vector-valued-functions-3-2",
  "type": "Definition",
  "number": "7.3.4",
  "title": "The Graph of a Function.",
  "body": " The Graph of a Function   The graph of a function is the set of all pairs , with in the domain of .   "
},
{
  "id": "fig-8-3-figure-example",
  "level": "2",
  "url": "sec-calculus-of-vector-valued-functions.html#fig-8-3-figure-example",
  "type": "Figure",
  "number": "7.3.5",
  "title": "",
  "body": " A graph of the function .   A graph of a function of two variables.   A graph of the function      "
},
{
  "id": "sec-calculus-of-vector-valued-functions-3-5",
  "level": "2",
  "url": "sec-calculus-of-vector-valued-functions.html#sec-calculus-of-vector-valued-functions-3-5",
  "type": "Definition",
  "number": "7.3.6",
  "title": "Level Curves and Contour Plots.",
  "body": " Level Curves and Contour Plots   A level curve of a scalar function of two variables is the curve consisting of pairs satisfying the equation , for some . A contour plot is a sketch in depicting level curves of a function for many different values of .   "
},
{
  "id": "sec-calculus-of-vector-valued-functions-3-7",
  "level": "2",
  "url": "sec-calculus-of-vector-valued-functions.html#sec-calculus-of-vector-valued-functions-3-7",
  "type": "Activity",
  "number": "7.3.2",
  "title": "",
  "body": "  Sketch a contour plot for the function by sketching the level curves with , , , and .     Level curves of     "
},
{
  "id": "sec-limits-and-continuity",
  "level": "1",
  "url": "sec-limits-and-continuity.html",
  "type": "Section",
  "number": "7.4",
  "title": "Limits and Continuity of Scalar-Valued Functions",
  "body": " Limits and Continuity of Scalar-Valued Functions   Basic definitions  Recall the definition of a limit from single-variable calculus. For a function and , the equation holds if for each , there is so that if , then . We can interpret this statement geometrically as follows: for any open interval centered at , there is an open interval centered at so that maps points in , excluding itself, into .  In this section, we discuss the notion of limits for functions of several variables, which are defined in precisely the same way, but with intervals replaced by disks or balls.   Disks in   Consider a point . The -disk centered at point is the region of bounded by the circle of radius centered at , i.e. the set .    See for a depiction of a disk.   A -disk centered around the point . From: Calculus Volume 3 by Strang and Herman.    We now define the limit of a scalar-valued function of two variables. For this definition, the equation , will then hold precisely when, for each open interval centered at , there is a disk centered at so that all points in this disk which are also contained in the domain of , excluding the point itself, are mapped by into .   Limits of Scalar-Valued Functions of Two Variables   Consider a scalar-valued function of two variables. The limit of as approaches is equal to , written , if for each , there is so that for any points in the domain of with , the inequality holds.     holds when is within of whenever is within of . From: Calculus Volume 3 by Strang and Herman.    Using vector-notation (recalling ), we can write a -disk centered at a point as the set of points so that . This motivates the higher dimensional variant of a disk: a -ball .   Balls in   For , the ball centered at is the set .    In a ball centered at a point is precisely the set of points satisfying the equation . It is the region in bounded by a sphere of radius .  By replacing disks with balls, we obtain the definition of a limit of a general scalar-valued function.   The Limit of a Scalar-Valued Function   Consider a scalar-valued function . The limit of as approaches is equal to , written , if for each , there is so that for any points in the domain of with , the inequality holds.     In order for the limit of , when it exists, to be unique, the point must have the property that the domain of contains a point other than in any ball centered at . This is only a small issue, since every point in the domain of any of the functions that naturally occur in calculus have this property.   Recall from the calculus of a single variable that a function is contiuous at a point when , i.e. when the limit on the left hand side exists and is equal to the right hand side. The continuity of functions of several variables is defined in exactly the same way.    A scalar-valued function is continuous at a point in it's domain if the limit of as exists, and .      Interior and Exterior Points of Sets  In several points in the calculus of several variables, and especially when consider optimization in several variables, we have to distinguish between the interior and exterior points of a domain of a function we are trying to optimize. Since these concepts are defined in terms of the balls we have considered in this section, we introduce these concepts now.   Interior and Exterior Points of Sets   Let be a subset of . Then a point is an interior point if there is a ball centered at completely contained in . A point is a boundary point if it is not an interior point, i.e. if every disk centered around contains both points inside , and also points outside of . The set of all boundary points of a set is called the boundary of the set .    Consider the figure for an illustration of the example of an interior point and boundary point.   In the set shown, is an interior point and is a boundary point.     Note that a boundary point of a set  need not be contained in the set . As an example, a -disk we have defined in this section to not contain any of their boundary, which is the circle of radius with the same center as the disk. A set that contains it's boundary is called closed .    Closed Sets   A set is called closed if it contains it's boundary.    We will later see in that the natural scenario in which to apply the calculus of functions of several variables we are about to develop to solve optimization problems is to the study of finding maxima and minima of scalar-valued functions defined on closed, bounded subsets of .   "
},
{
  "id": "sec-limits-and-continuity-2-4",
  "level": "2",
  "url": "sec-limits-and-continuity.html#sec-limits-and-continuity-2-4",
  "type": "Definition",
  "number": "7.4.1",
  "title": "Disks in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Disks in   Consider a point . The -disk centered at point is the region of bounded by the circle of radius centered at , i.e. the set .   "
},
{
  "id": "fig-8-4-delta-disk",
  "level": "2",
  "url": "sec-limits-and-continuity.html#fig-8-4-delta-disk",
  "type": "Figure",
  "number": "7.4.2",
  "title": "",
  "body": " A -disk centered around the point . From: Calculus Volume 3 by Strang and Herman.   "
},
{
  "id": "def-8-4-limit-2d",
  "level": "2",
  "url": "sec-limits-and-continuity.html#def-8-4-limit-2d",
  "type": "Definition",
  "number": "7.4.3",
  "title": "Limits of Scalar-Valued Functions of Two Variables.",
  "body": " Limits of Scalar-Valued Functions of Two Variables   Consider a scalar-valued function of two variables. The limit of as approaches is equal to , written , if for each , there is so that for any points in the domain of with , the inequality holds.   "
},
{
  "id": "sec-limits-and-continuity-2-9",
  "level": "2",
  "url": "sec-limits-and-continuity.html#sec-limits-and-continuity-2-9",
  "type": "Figure",
  "number": "7.4.4",
  "title": "",
  "body": " holds when is within of whenever is within of . From: Calculus Volume 3 by Strang and Herman.   "
},
{
  "id": "sec-limits-and-continuity-2-11",
  "level": "2",
  "url": "sec-limits-and-continuity.html#sec-limits-and-continuity-2-11",
  "type": "Definition",
  "number": "7.4.5",
  "title": "Balls in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Balls in   For , the ball centered at is the set .   "
},
{
  "id": "sec-limits-and-continuity-2-14",
  "level": "2",
  "url": "sec-limits-and-continuity.html#sec-limits-and-continuity-2-14",
  "type": "Definition",
  "number": "7.4.6",
  "title": "The Limit of a Scalar-Valued Function.",
  "body": " The Limit of a Scalar-Valued Function   Consider a scalar-valued function . The limit of as approaches is equal to , written , if for each , there is so that for any points in the domain of with , the inequality holds.   "
},
{
  "id": "sec-limits-and-continuity-2-15",
  "level": "2",
  "url": "sec-limits-and-continuity.html#sec-limits-and-continuity-2-15",
  "type": "Remark",
  "number": "7.4.7",
  "title": "",
  "body": " In order for the limit of , when it exists, to be unique, the point must have the property that the domain of contains a point other than in any ball centered at . This is only a small issue, since every point in the domain of any of the functions that naturally occur in calculus have this property.  "
},
{
  "id": "sec-limits-and-continuity-2-17",
  "level": "2",
  "url": "sec-limits-and-continuity.html#sec-limits-and-continuity-2-17",
  "type": "Definition",
  "number": "7.4.8",
  "title": "",
  "body": "  A scalar-valued function is continuous at a point in it's domain if the limit of as exists, and .   "
},
{
  "id": "sec-8-4-interior-and-exterior",
  "level": "2",
  "url": "sec-limits-and-continuity.html#sec-8-4-interior-and-exterior",
  "type": "Definition",
  "number": "7.4.9",
  "title": "Interior and Exterior Points of Sets.",
  "body": " Interior and Exterior Points of Sets   Let be a subset of . Then a point is an interior point if there is a ball centered at completely contained in . A point is a boundary point if it is not an interior point, i.e. if every disk centered around contains both points inside , and also points outside of . The set of all boundary points of a set is called the boundary of the set .   "
},
{
  "id": "sec-limits-and-continuity-3-5",
  "level": "2",
  "url": "sec-limits-and-continuity.html#sec-limits-and-continuity-3-5",
  "type": "Figure",
  "number": "7.4.10",
  "title": "",
  "body": " In the set shown, is an interior point and is a boundary point.   "
},
{
  "id": "sec-limits-and-continuity-3-6",
  "level": "2",
  "url": "sec-limits-and-continuity.html#sec-limits-and-continuity-3-6",
  "type": "Remark",
  "number": "7.4.11",
  "title": "",
  "body": " Note that a boundary point of a set  need not be contained in the set . As an example, a -disk we have defined in this section to not contain any of their boundary, which is the circle of radius with the same center as the disk. A set that contains it's boundary is called closed .  "
},
{
  "id": "sec-8-5-closed-sets",
  "level": "2",
  "url": "sec-limits-and-continuity.html#sec-8-5-closed-sets",
  "type": "Definition",
  "number": "7.4.12",
  "title": "Closed Sets.",
  "body": " Closed Sets   A set is called closed if it contains it's boundary.   "
},
{
  "id": "sec-partial-derivatives",
  "level": "1",
  "url": "sec-partial-derivatives.html",
  "type": "Section",
  "number": "8.1",
  "title": "Partial Derivatives",
  "body": " Partial Derivatives   Definition and Basic Concepts  We now begin discussing derivatives of functions of several variables. The easiest kind of derivative for such a function can be obtained by taking a derivative of a single variable at a time, so that the problem is reduced to the calculus of a single variable. This leads to the notion of a partial derivative of a function. We define and study partial derivatives of functions of two variables, before proceeding to the definition for functions of a higher number of variables in .    Let be a scalar-valued function in two variables. The partial derivative of with respect to at is the scalar quantity , provided this limit exists. Similarly, the partial derivative of with respect to at is the quantity provided this limit exists.    We compute the partial derivative in of an expression precisely by treating the -variable as a constant, and differentiating in . Similarily, we compute the partial derivative in by treating the -variable as a constant.    There are several notations used for the partial derivative of a function , namely, we might write as . Similarily, we write as .      Let     Calculate directly using the definition of the derivative.   We must evaluate the limit . We begin by expanding and simplifying the expression , that . So for , . So .    Calculate directly using the definition of the derivative.   We first calculate that . So . So .      For each function , find and .        To find , treat as a constant: .  To find , treat as a constant: .      Treating as a constant, we find that . Treating as a constant, we find that .     .   To find , treat as a constant and use the product and chain rules: . To find , treat as a constant: .      Geometric Interpretation   The Slice of a Function   Given a function and , the slice of the function in the plane is the function given by . Similarily, for the slice of in the plane is the function given by .    Geometrically, the slice of a function in the plane corresponding to intersecting the surface given by the equation with the plane , creating a curve in this plane.    Sketch the slices of the function in the plane .    The slice in the plane is the function . This slice is a sine function with a phase shift of . See for a sketch of these slices.   The graph of showing slices at different values of . Each curve represents the function for a fixed value of . From: Stanford's MATH 51 textbook       Geometric Interpretation   If we consider the surface in described by the equation , then  is the slope of the tangent line to the curve formed by intersecting the surface with the vertical plane .  is the slope of the tangent line to the curve formed by intersecting the surface with the vertical plane .        Let . Find and and interpret these numbers as slopes of a certain curve.    We calculate that . So . This is the slope of the curve in the plane obtained by intersecting the surface with the plane defined by the equation , at the point . That is, the tangent line of the curve at this point is given by .  We calculate that . So . This is the slope of the curve in the plane obtained by intersecting the surface with the plane defined by the equation , at the point . That is, the tangent line of the curve at this point is given by .      Consider the contour plot shown in for a function with contour lines at increments of . In particular, consider the curve obtained from the slice , indicated by the red line in . By interpreting the contour plot, what can we say about the slopes of this curve, or equivalently, the values of on this line?   A contour plot for a function with increments of . The line is indicated in red. From: Stanford's MATH 51 textbook      Here is some of the information we can read from the contour plot:  Between and , the contour values increase (from about to ), indicating in this region (the function is increasing).  Near , the contour lines are very close together, and the contour values decrease, indicating the , and that the magnitude of is large (the curve slopes steeply downward).  Between and , the contour values increase, indicating . (the function is increasing).  See for a graph depicting the curve, to check what we have deduced is correct.   The slice of the function where . The dashed lines correspond to increments of in the -axis. From: Stanford's MATH 51 textbook        Consider , which is the same contour plot as in , but with the vertical line indicated instead. As in , read off the behaviour of the partial derivatives from the contour plot.   A contour plot with increments of , with the vertical line highlighted in red. From: Stanford's MATH 51 textbook      Here is some information that can be deduced from the contour plot:  The contour values are always decreasing as we increase along the red line, so that on this line.  The contour lines are closest together near , so will have largest magnitude on the line near .      Generally, the spacing of contour lines corresponds to the magnitude of partial derivatives, and the sign of the partial derivatives corresponds to whether the function increases or decreasing in that direction.    Consider the function , whose contour plot is indicated in . Five points are marked on the plot: , , , , and . For each of these five points, determine from the contour plot whether is positive, negative, or zero, and whether is positive, negative, or zero. Then calculate these derivatives exactly and check whether your observations were correct.   Contour plot for with increments of , and five points , , , , and indicated. From: Stanford's MATH 51 textbook      At all five points, because the contour values increase as increase values of . The contour lines around points and are more tightly packed than around , , and , indicating that has larger magnitude at and than at , , and .  At the point , since the contour line passing through is a straight vertical line. It is not possible to determine the sign of at the points and , but we know the value of must be small since the contour lines are more spread out than anywhere else in the plot. At the point , , since the contour values increase as we increase in values. At the point , since the contour values decrease .  We now verify these observations by computing partial derivatives. We check that . So   and .   and .   and .   and .   and .        Partial Derivatives with More Variables  The concept of partial derivatives extends naturally to functions of more than two variables.    For a function of variables, the partial derivative with respect to is defined as provided this limit exists. Using vector notation, we can write this definition more cleanly, by writing , where are the standard basis vectors (recall ). This partial derivative is also written as . If the variables are denoted using different symbols, these symbols might also be used to denote the partial derivatives instead. For instance, in , we might write a function as , and then the three partial derivatives of may be denoted using any of the following four notations:  , , and .   , and .   and .   , , and .      As for functions of two variables, we can calculate these derivatives by treating all variables but that we are taking the partial derivative of as constants.    If , find , , and .    To find , treat and as constants:   To find , treat and as constants:   To find , treat and as constants:       Find , , and where .                 Find and where .              Higher-Order Partial Derivatives  Given a scalar-valued function , the partial derivatives of (where defined) are also scalar-valued functions, so we can consider partial derivatives of that function as well, which leads to higher order partial derivatives .    If is a function of two variables, then the second-order partial derivatives of are defined as:  The derivative or , obtained by taking the partial derivative of twice in the variable.  The derivative or , obtained by first differentiating in the variable, and then differentiating in the variable.  The derivative , or , obtained by first differentiating in the variable, and then differentiating in the variable.  The derivative , or , obtained by differentiating twice in the variable. More generally, the second-order partial derivatives of a function of variables are the quantities , for . Similarily, for a function , the higher derivatives of are defined as for , obtained by first differentiating in the variable , and then differentiating in the variable.     Clairaut's Theorem   Suppose a scalar-valued function is defined in an open ball that contains a point . If the functions and are well-defined and continuous on the ball , then .      In this activity we compute all four partial derivatives of the function .    First compute and .   We calculate that and .    Next, compute and .   We calculate by differentiating the function in the -variable, i.e. . Similarily, we calculate by differentiating the function in the -variable, i.e.  .   Now compute and .   We compute by differentiating the function in the -variable, i.e. so that . We compute by differentiating the function in the -variable, i.e. so that . Notice that both functions are continuous, and equal to one another, as guaranteed by .      For most functions encountered in practice, the second-order partial derivatives are continuous where defined, and so applies. However, there are functions for which mixed partial derivatives are not equal to one another.      Find all four second partial derivatives of the function .    We begin by calculating and using the chain rule, i.e. calculating that and . The quotient rule then tells us that that that and that .      The Gradient and the Hessian  We can collect the partial derivatives of a scalar-valued function to obtain a vector.    Let be a scalar-valued function of -variables, and suppose all second-order derivatives of are well-defined and continuous on the domain of . The gradient of is the vector-valued function . The gradient at a point is the vector in .      Let . Find the gradient of .    We begin by computing the partial derivatives of , that and . So .      Let . Compute .    We compute that and . So and in particular, .    An important property of the gradient of a function at a point is that it is a vector that is perpendicular to the level curves of the function.    Let be a function with continuous partial derivatives. If is a point where , then is perpendicular to the level curve of passing through the point .    See for a graphical example of .   A contour plot of the function , with the gradient vectors at three points , , and . From: Stanford's MATH 51 textbook      Let be a scalar-valued function of -variables. The Hessian matrix of at a point is the matrix of second partial derivatives: That is, is the matrix whose -entry is the second derivative obtained by first differentiating in the variable, and then the variable. By Clairaut's Theorem, the Hessian is then a symmetric matrix at any interior point of the domain of .    In particular, the Hessian of a scalar-valued function of two variables can be written .    Find the Hessian matrix for the function at a general point .    We start by computing the first and second partial derivatives of . In we computed that . We then calculate that , that , that , and that . Thus .      Find the Hessian matrix of the function at a general point     We compute that that , that , and that . So .      Let . Compute it's gradient and Hessian at a general point .    We begin by computing the gradient. We calculate that , that , and that . So .  Next, we compute the second derivatives of . We compute that , and that . So .     "
},
{
  "id": "sec-partial-derivatives-2-3",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-2-3",
  "type": "Definition",
  "number": "8.1.1",
  "title": "",
  "body": "  Let be a scalar-valued function in two variables. The partial derivative of with respect to at is the scalar quantity , provided this limit exists. Similarly, the partial derivative of with respect to at is the quantity provided this limit exists.   "
},
{
  "id": "sec-partial-derivatives-2-5",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-2-5",
  "type": "Note",
  "number": "8.1.2",
  "title": "",
  "body": "  There are several notations used for the partial derivative of a function , namely, we might write as . Similarily, we write as .   "
},
{
  "id": "sec-partial-derivatives-2-6",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-2-6",
  "type": "Activity",
  "number": "8.1.1",
  "title": "",
  "body": "  Let     Calculate directly using the definition of the derivative.   We must evaluate the limit . We begin by expanding and simplifying the expression , that . So for , . So .    Calculate directly using the definition of the derivative.   We first calculate that . So . So .   "
},
{
  "id": "sec-partial-derivatives-2-7",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-2-7",
  "type": "Activity",
  "number": "8.1.2",
  "title": "",
  "body": "  For each function , find and .        To find , treat as a constant: .  To find , treat as a constant: .      Treating as a constant, we find that . Treating as a constant, we find that .     .   To find , treat as a constant and use the product and chain rules: . To find , treat as a constant: .   "
},
{
  "id": "sec-partial-derivatives-3-2",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-3-2",
  "type": "Definition",
  "number": "8.1.3",
  "title": "The Slice of a Function.",
  "body": " The Slice of a Function   Given a function and , the slice of the function in the plane is the function given by . Similarily, for the slice of in the plane is the function given by .   "
},
{
  "id": "sec-partial-derivatives-3-4",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-3-4",
  "type": "Activity",
  "number": "8.1.3",
  "title": "",
  "body": "  Sketch the slices of the function in the plane .    The slice in the plane is the function . This slice is a sine function with a phase shift of . See for a sketch of these slices.   The graph of showing slices at different values of . Each curve represents the function for a fixed value of . From: Stanford's MATH 51 textbook     "
},
{
  "id": "thm-8-5-geometric-interpretation-of-partial",
  "level": "2",
  "url": "sec-partial-derivatives.html#thm-8-5-geometric-interpretation-of-partial",
  "type": "Theorem",
  "number": "8.1.5",
  "title": "Geometric Interpretation.",
  "body": " Geometric Interpretation   If we consider the surface in described by the equation , then  is the slope of the tangent line to the curve formed by intersecting the surface with the vertical plane .  is the slope of the tangent line to the curve formed by intersecting the surface with the vertical plane .     "
},
{
  "id": "sec-partial-derivatives-3-6",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-3-6",
  "type": "Activity",
  "number": "8.1.4",
  "title": "",
  "body": "  Let . Find and and interpret these numbers as slopes of a certain curve.    We calculate that . So . This is the slope of the curve in the plane obtained by intersecting the surface with the plane defined by the equation , at the point . That is, the tangent line of the curve at this point is given by .  We calculate that . So . This is the slope of the curve in the plane obtained by intersecting the surface with the plane defined by the equation , at the point . That is, the tangent line of the curve at this point is given by .   "
},
{
  "id": "act-8-5-ex-contour-red-line",
  "level": "2",
  "url": "sec-partial-derivatives.html#act-8-5-ex-contour-red-line",
  "type": "Activity",
  "number": "8.1.5",
  "title": "",
  "body": "  Consider the contour plot shown in for a function with contour lines at increments of . In particular, consider the curve obtained from the slice , indicated by the red line in . By interpreting the contour plot, what can we say about the slopes of this curve, or equivalently, the values of on this line?   A contour plot for a function with increments of . The line is indicated in red. From: Stanford's MATH 51 textbook      Here is some of the information we can read from the contour plot:  Between and , the contour values increase (from about to ), indicating in this region (the function is increasing).  Near , the contour lines are very close together, and the contour values decrease, indicating the , and that the magnitude of is large (the curve slopes steeply downward).  Between and , the contour values increase, indicating . (the function is increasing).  See for a graph depicting the curve, to check what we have deduced is correct.   The slice of the function where . The dashed lines correspond to increments of in the -axis. From: Stanford's MATH 51 textbook     "
},
{
  "id": "sec-partial-derivatives-3-8",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-3-8",
  "type": "Activity",
  "number": "8.1.6",
  "title": "",
  "body": "  Consider , which is the same contour plot as in , but with the vertical line indicated instead. As in , read off the behaviour of the partial derivatives from the contour plot.   A contour plot with increments of , with the vertical line highlighted in red. From: Stanford's MATH 51 textbook      Here is some information that can be deduced from the contour plot:  The contour values are always decreasing as we increase along the red line, so that on this line.  The contour lines are closest together near , so will have largest magnitude on the line near .     "
},
{
  "id": "sec-partial-derivatives-3-10",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-3-10",
  "type": "Activity",
  "number": "8.1.7",
  "title": "",
  "body": "  Consider the function , whose contour plot is indicated in . Five points are marked on the plot: , , , , and . For each of these five points, determine from the contour plot whether is positive, negative, or zero, and whether is positive, negative, or zero. Then calculate these derivatives exactly and check whether your observations were correct.   Contour plot for with increments of , and five points , , , , and indicated. From: Stanford's MATH 51 textbook      At all five points, because the contour values increase as increase values of . The contour lines around points and are more tightly packed than around , , and , indicating that has larger magnitude at and than at , , and .  At the point , since the contour line passing through is a straight vertical line. It is not possible to determine the sign of at the points and , but we know the value of must be small since the contour lines are more spread out than anywhere else in the plot. At the point , , since the contour values increase as we increase in values. At the point , since the contour values decrease .  We now verify these observations by computing partial derivatives. We check that . So   and .   and .   and .   and .   and .     "
},
{
  "id": "sec-partial-derivatives-4-3",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-4-3",
  "type": "Definition",
  "number": "8.1.10",
  "title": "",
  "body": "  For a function of variables, the partial derivative with respect to is defined as provided this limit exists. Using vector notation, we can write this definition more cleanly, by writing , where are the standard basis vectors (recall ). This partial derivative is also written as . If the variables are denoted using different symbols, these symbols might also be used to denote the partial derivatives instead. For instance, in , we might write a function as , and then the three partial derivatives of may be denoted using any of the following four notations:  , , and .   , and .   and .   , , and .     "
},
{
  "id": "sec-partial-derivatives-4-5",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-4-5",
  "type": "Activity",
  "number": "8.1.8",
  "title": "",
  "body": "  If , find , , and .    To find , treat and as constants:   To find , treat and as constants:   To find , treat and as constants:    "
},
{
  "id": "sec-partial-derivatives-4-6",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-4-6",
  "type": "Activity",
  "number": "8.1.9",
  "title": "",
  "body": "  Find , , and where .              "
},
{
  "id": "sec-partial-derivatives-4-7",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-4-7",
  "type": "Activity",
  "number": "8.1.10",
  "title": "",
  "body": "  Find and where .           "
},
{
  "id": "sec-partial-derivatives-5-3",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-5-3",
  "type": "Definition",
  "number": "8.1.11",
  "title": "",
  "body": "  If is a function of two variables, then the second-order partial derivatives of are defined as:  The derivative or , obtained by taking the partial derivative of twice in the variable.  The derivative or , obtained by first differentiating in the variable, and then differentiating in the variable.  The derivative , or , obtained by first differentiating in the variable, and then differentiating in the variable.  The derivative , or , obtained by differentiating twice in the variable. More generally, the second-order partial derivatives of a function of variables are the quantities , for . Similarily, for a function , the higher derivatives of are defined as for , obtained by first differentiating in the variable , and then differentiating in the variable.   "
},
{
  "id": "thm-8-5-clairaut-theorem",
  "level": "2",
  "url": "sec-partial-derivatives.html#thm-8-5-clairaut-theorem",
  "type": "Theorem",
  "number": "8.1.12",
  "title": "Clairaut’s Theorem.",
  "body": " Clairaut's Theorem   Suppose a scalar-valued function is defined in an open ball that contains a point . If the functions and are well-defined and continuous on the ball , then .   "
},
{
  "id": "sec-partial-derivatives-5-5",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-5-5",
  "type": "Activity",
  "number": "8.1.11",
  "title": "",
  "body": "  In this activity we compute all four partial derivatives of the function .    First compute and .   We calculate that and .    Next, compute and .   We calculate by differentiating the function in the -variable, i.e. . Similarily, we calculate by differentiating the function in the -variable, i.e.  .   Now compute and .   We compute by differentiating the function in the -variable, i.e. so that . We compute by differentiating the function in the -variable, i.e. so that . Notice that both functions are continuous, and equal to one another, as guaranteed by .   "
},
{
  "id": "sec-partial-derivatives-5-6",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-5-6",
  "type": "Remark",
  "number": "8.1.13",
  "title": "",
  "body": "  For most functions encountered in practice, the second-order partial derivatives are continuous where defined, and so applies. However, there are functions for which mixed partial derivatives are not equal to one another.   "
},
{
  "id": "sec-partial-derivatives-5-7",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-5-7",
  "type": "Activity",
  "number": "8.1.12",
  "title": "",
  "body": "  Find all four second partial derivatives of the function .    We begin by calculating and using the chain rule, i.e. calculating that and . The quotient rule then tells us that that that and that .   "
},
{
  "id": "sec-8-5-gradient",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-8-5-gradient",
  "type": "Definition",
  "number": "8.1.14",
  "title": "",
  "body": "  Let be a scalar-valued function of -variables, and suppose all second-order derivatives of are well-defined and continuous on the domain of . The gradient of is the vector-valued function . The gradient at a point is the vector in .   "
},
{
  "id": "act-8-5-grad-ex-12",
  "level": "2",
  "url": "sec-partial-derivatives.html#act-8-5-grad-ex-12",
  "type": "Activity",
  "number": "8.1.13",
  "title": "",
  "body": "  Let . Find the gradient of .    We begin by computing the partial derivatives of , that and . So .   "
},
{
  "id": "act-8-5-nabla-f-ex",
  "level": "2",
  "url": "sec-partial-derivatives.html#act-8-5-nabla-f-ex",
  "type": "Activity",
  "number": "8.1.14",
  "title": "",
  "body": "  Let . Compute .    We compute that and . So and in particular, .   "
},
{
  "id": "thm-8-5-level-curve-perpendicular",
  "level": "2",
  "url": "sec-partial-derivatives.html#thm-8-5-level-curve-perpendicular",
  "type": "Theorem",
  "number": "8.1.15",
  "title": "",
  "body": "  Let be a function with continuous partial derivatives. If is a point where , then is perpendicular to the level curve of passing through the point .   "
},
{
  "id": "fig-8-5-gradient-level-curves",
  "level": "2",
  "url": "sec-partial-derivatives.html#fig-8-5-gradient-level-curves",
  "type": "Figure",
  "number": "8.1.16",
  "title": "",
  "body": " A contour plot of the function , with the gradient vectors at three points , , and . From: Stanford's MATH 51 textbook   "
},
{
  "id": "def-8-5-hessian",
  "level": "2",
  "url": "sec-partial-derivatives.html#def-8-5-hessian",
  "type": "Definition",
  "number": "8.1.17",
  "title": "",
  "body": "  Let be a scalar-valued function of -variables. The Hessian matrix of at a point is the matrix of second partial derivatives: That is, is the matrix whose -entry is the second derivative obtained by first differentiating in the variable, and then the variable. By Clairaut's Theorem, the Hessian is then a symmetric matrix at any interior point of the domain of .   "
},
{
  "id": "sec-partial-derivatives-6-12",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-6-12",
  "type": "Activity",
  "number": "8.1.15",
  "title": "",
  "body": "  Find the Hessian matrix for the function at a general point .    We start by computing the first and second partial derivatives of . In we computed that . We then calculate that , that , that , and that . Thus .   "
},
{
  "id": "sec-partial-derivatives-6-13",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-6-13",
  "type": "Activity",
  "number": "8.1.16",
  "title": "",
  "body": "  Find the Hessian matrix of the function at a general point     We compute that that , that , and that . So .   "
},
{
  "id": "sec-partial-derivatives-6-14",
  "level": "2",
  "url": "sec-partial-derivatives.html#sec-partial-derivatives-6-14",
  "type": "Activity",
  "number": "8.1.17",
  "title": "",
  "body": "  Let . Compute it's gradient and Hessian at a general point .    We begin by computing the gradient. We calculate that , that , and that . So .  Next, we compute the second derivatives of . We compute that , and that . So .   "
},
{
  "id": "sec-tangent-planes",
  "level": "1",
  "url": "sec-tangent-planes.html",
  "type": "Section",
  "number": "8.2",
  "title": "Tangent Planes and Linear Approximation",
  "body": " Tangent Planes and Linear Approximation   Linear Approximations and Differentiability  Recall that the linear approximation of a function of one variable at some point is the function , and this function gives the best linear approximation of near . Similarily, the partial derivatives of a function can be used to define a linear approximation to a function of several variables. This leads to .   Linear Approximation   Given a scalar-valued function , and a point in the domain of where the partial derivatives of are well-defined, the linear approximation of at the point is the linear function , where we can expand the dot product that occurs in the equation, so that .    In particular, the linear approximation of a scalar-valued function at a point is given by .    Consider the function .    Find the linear approximation of the function at the point .   We begin by finding the gradient of at . We compute that , that , and that . So, evaluating these quantities at , we find that . We also calculate that . So the linear approximation to at is the function .    Use the linear approximation you have found to approximate the value .   We calculate that the linear approximation to is the function . So .    Now suppose a function of a single variable is differentiable at a point , i.e. so that the limit exists. We can rearrange this equation to read , i.e. so that , where is the linear approximation of at . A function of several variables is differentiable when the same property holds, with the linear approximation given by the partial derivatives of the function.   Differentiability   A scalar-valued function is differentiable at a point if the gradient of is well-defined at , and if , where is the linear approximation of at . A vector-valued function is differentiable at a point precisely when each of it's component functions is differentiable at that point.     The equation can only hold if is a good linear approximation of near , so that the magnitude of the numerator is much smaller than the magnitude of the denominator when is near , i.e. when is small.   The following theorem is the main way we will determine if a function is differentiable, since checking differentiability from the definition can be quite technical.   Continuity of First Partials Implies Differentiability   Let be a scalar-valued function, and suppose is an interior point (recall ) of the domains of and it's partial derivatives. Moreover, suppose that all of the partial derivatives are continuous at . Then is differentiable at .      Tangent Planes  It may be helpful at this point to reread . The method of solving will be relevant in the proof of .    Find an equation for the plane containing the lines and , where is the line parameterized by the function and where is the line parameterized by the function .    Recall , which specifies a plane via an equation of the form , where is a vector normal to the plane, and is a point on the plane. We can take . In order for to be the normal vector to the plane containing and , it must be perpendicular to the two direction vectors and , i.e. we must have . If we write , then expanding these dot products gives a homogeneous system . Let's convert the left hand side to matrix form, i.e. writing the homogeneous system as . Recalling , we solve this homogeneous system by performing row operations to the matrix on the left hand side, from which we obtain that This row reduction tells us that the homogeneous system above is equivalent to the system . Setting gives a normal vector , and any solution to the homogeneous equation is a scalar multiple of this vector (recalling terminology from , it is a basic solution ). Thus the equation is an equation for the plane, which, if we write , can be expanded as which we simplify to .    Using partial derivatives, we can obtain analogues of these results for functions of multiple variables.   Tangent Plane   Let be a surface, and a point on . A tangent plane to at is a plane that contains the tangent lines of any differentiable curve contained in as it passes through .   The tangent plane to a surface at a point contains all the tangent lines to curves in that pass through . From: Calculus, Volume 3, OpenStax, by Strang and Herman       Equation of the Tangent Plane   Suppose is the graph of a function which is differentiable at a point . Then the tangent plane to exists, is unique, and is described by the equation . Note that this plane is the graph of the linear approximation to at .    We do not prove that the tangent plane to exists. We only verify that the plane described by the equation above is the only possible tangent plane. Recall from that the curve obtained by the intersection of with the plane has slope at the point , and the tangent line to the curve at this point is by a line with direction vector . Similarily, the curve obtained by the intersection of with the plane has slope , and so the tangent line to the curve at this point is a line with direction vector . But now using the method of , we see that a normal vector to the plane containing these two lines is of the form . So the tangent plane to at must be described by the equation , an equation we may rearrange to read .      Find an equation of the tangent plane to the surface at .    The surface is the graph of the equation , so we may use to find the equation of the tangent plane. First, we calculate that . Next, we calculate that so and . This means that an equation describing the tangent plane is given by which simplifies to .     "
},
{
  "id": "def-9-1-linear-approximation",
  "level": "2",
  "url": "sec-tangent-planes.html#def-9-1-linear-approximation",
  "type": "Definition",
  "number": "8.2.1",
  "title": "Linear Approximation.",
  "body": " Linear Approximation   Given a scalar-valued function , and a point in the domain of where the partial derivatives of are well-defined, the linear approximation of at the point is the linear function , where we can expand the dot product that occurs in the equation, so that .   "
},
{
  "id": "sec-tangent-planes-2-5",
  "level": "2",
  "url": "sec-tangent-planes.html#sec-tangent-planes-2-5",
  "type": "Activity",
  "number": "8.2.1",
  "title": "",
  "body": "  Consider the function .    Find the linear approximation of the function at the point .   We begin by finding the gradient of at . We compute that , that , and that . So, evaluating these quantities at , we find that . We also calculate that . So the linear approximation to at is the function .    Use the linear approximation you have found to approximate the value .   We calculate that the linear approximation to is the function . So .   "
},
{
  "id": "def-9-1-differentiability",
  "level": "2",
  "url": "sec-tangent-planes.html#def-9-1-differentiability",
  "type": "Definition",
  "number": "8.2.2",
  "title": "Differentiability.",
  "body": " Differentiability   A scalar-valued function is differentiable at a point if the gradient of is well-defined at , and if , where is the linear approximation of at . A vector-valued function is differentiable at a point precisely when each of it's component functions is differentiable at that point.   "
},
{
  "id": "sec-tangent-planes-2-8",
  "level": "2",
  "url": "sec-tangent-planes.html#sec-tangent-planes-2-8",
  "type": "Remark",
  "number": "8.2.3",
  "title": "",
  "body": " The equation can only hold if is a good linear approximation of near , so that the magnitude of the numerator is much smaller than the magnitude of the denominator when is near , i.e. when is small.  "
},
{
  "id": "thm-9-1-continuity-of-partials-difeferntiability",
  "level": "2",
  "url": "sec-tangent-planes.html#thm-9-1-continuity-of-partials-difeferntiability",
  "type": "Theorem",
  "number": "8.2.4",
  "title": "Continuity of First Partials Implies Differentiability.",
  "body": " Continuity of First Partials Implies Differentiability   Let be a scalar-valued function, and suppose is an interior point (recall ) of the domains of and it's partial derivatives. Moreover, suppose that all of the partial derivatives are continuous at . Then is differentiable at .   "
},
{
  "id": "act-9-1-find-plane-generated-by-lines",
  "level": "2",
  "url": "sec-tangent-planes.html#act-9-1-find-plane-generated-by-lines",
  "type": "Activity",
  "number": "8.2.2",
  "title": "",
  "body": "  Find an equation for the plane containing the lines and , where is the line parameterized by the function and where is the line parameterized by the function .    Recall , which specifies a plane via an equation of the form , where is a vector normal to the plane, and is a point on the plane. We can take . In order for to be the normal vector to the plane containing and , it must be perpendicular to the two direction vectors and , i.e. we must have . If we write , then expanding these dot products gives a homogeneous system . Let's convert the left hand side to matrix form, i.e. writing the homogeneous system as . Recalling , we solve this homogeneous system by performing row operations to the matrix on the left hand side, from which we obtain that This row reduction tells us that the homogeneous system above is equivalent to the system . Setting gives a normal vector , and any solution to the homogeneous equation is a scalar multiple of this vector (recalling terminology from , it is a basic solution ). Thus the equation is an equation for the plane, which, if we write , can be expanded as which we simplify to .   "
},
{
  "id": "sec-tangent-planes-3-5",
  "level": "2",
  "url": "sec-tangent-planes.html#sec-tangent-planes-3-5",
  "type": "Definition",
  "number": "8.2.5",
  "title": "Tangent Plane.",
  "body": " Tangent Plane   Let be a surface, and a point on . A tangent plane to at is a plane that contains the tangent lines of any differentiable curve contained in as it passes through .   The tangent plane to a surface at a point contains all the tangent lines to curves in that pass through . From: Calculus, Volume 3, OpenStax, by Strang and Herman     "
},
{
  "id": "thm-9-1-equation-of-graph-tangent-plane",
  "level": "2",
  "url": "sec-tangent-planes.html#thm-9-1-equation-of-graph-tangent-plane",
  "type": "Theorem",
  "number": "8.2.7",
  "title": "Equation of the Tangent Plane.",
  "body": " Equation of the Tangent Plane   Suppose is the graph of a function which is differentiable at a point . Then the tangent plane to exists, is unique, and is described by the equation . Note that this plane is the graph of the linear approximation to at .    We do not prove that the tangent plane to exists. We only verify that the plane described by the equation above is the only possible tangent plane. Recall from that the curve obtained by the intersection of with the plane has slope at the point , and the tangent line to the curve at this point is by a line with direction vector . Similarily, the curve obtained by the intersection of with the plane has slope , and so the tangent line to the curve at this point is a line with direction vector . But now using the method of , we see that a normal vector to the plane containing these two lines is of the form . So the tangent plane to at must be described by the equation , an equation we may rearrange to read .   "
},
{
  "id": "sec-tangent-planes-3-7",
  "level": "2",
  "url": "sec-tangent-planes.html#sec-tangent-planes-3-7",
  "type": "Activity",
  "number": "8.2.3",
  "title": "",
  "body": "  Find an equation of the tangent plane to the surface at .    The surface is the graph of the equation , so we may use to find the equation of the tangent plane. First, we calculate that . Next, we calculate that so and . This means that an equation describing the tangent plane is given by which simplifies to .   "
},
{
  "id": "sec-the-chain-rule",
  "level": "1",
  "url": "sec-the-chain-rule.html",
  "type": "Section",
  "number": "8.3",
  "title": "The Chain Rule",
  "body": " The Chain Rule   In this section, we discuss the higher dimension analogue of the chain rule from single variable calculus.    Composite functions   Composite Function   If and are multivariable functions, we can form a new composite function as follows. Take an input in , and then apply to the input to obtain a vector in . Apply to this vector to obtain a vector . This is the output of the composite function. In other words, out input is fed through the following diagram . We write the composite function as (the symbol should be read as composed with ). In symbols, the composite function is defined as .     Note that the composite is only defined when the output of is a possible input to , i.e. the output of is , which is the space of inputs to .   Note that we have already encounted the composition of linear transformations in . Here is another exercise of that type as a reminder.    Let and be linear transformations defined by their component functions as follows: .    Find the matrices and associated with these transformations, so that and (recall the notation from ).   We recall the method of . In particular, we obtain the first column of from the entries of , and the second column from . We calculate that and that . So the matrix is equal to .  Similarily, we calculate that , that , and that . So the matrix is given by .    Calculate the composite transformation and express it as a matrix transformation from to .   Recalling , we have that . Now Therefore, the composite transformation can be expressed as:     Here is a nonlinear example of the composition of two functions.    Consider and defined by . Find expressions for and .    We calculate that , and that .     Observe that and are very different functions. We must therefore be careful that we compose functions in the correct order.     Consider and defined by     Find an expression for .   We calculate that .    Is the composition defined? Why or why not?   For the composition to be defined, the outputs of must be contained in the inputs of . But outputs points in , whereas takes in points in as input, so the composition does not make sense.     Compositions of vector-valued functions play a key role in modern machine learning. The figures below illustrate how deep neural networks are composite functions.     Chain Rule Case 1: One Independent Variable  Recall the chain rule from single-variable calculus, that for two functions and , we have . In this section we will give several generalizations of this rule to several vairables.  Recall that for a function , , and that .   Chain Rule for One Independent Variable   Consider a scalar-valued function , and a vector-valued function of a single variable. Then the composition is a scalar-valued function of a single variable. If is differentiable at , and is differentiable at , then is differentiable at and , where and are the components of .    We note that the right hand side of the equation can be written as , where is the linear approximation of at . Because is differentiable, we know that . Now . Using these two equations (substituting for in the first equation), we find that . But recalling that , we conclude that .     There are several ways to aid in remembering the formula for the chain rule. The first is to simplify the equation, writing it as so that the equation looks more like the chain rule from single variable calculus. The second is the following mnemonic: if we write for and for , and write the components of as and , then the chain rule reads that , so that the symbols and in the numerators on the right hand side, and the symbols and that occur in the denominators appear to cancel like when multiplying fractions.     Suppose , where and . Compute .    First, we need to calculate Now we substitute these into the chain rule formula: We can simplify this further if we want: Therefore,       If , and , find .    We calculate that and that . Now Thus .      Chain Rule Case 2: Two Independent Variables   Chain Rule for Two Independent Variables   Suppose is a scalar-valued function, and is a vector-valued function. Then is a scalar-valued function, and the two equations and hold.    Fix the second variable, and apply to the first to obtain the formula for . Then fix the first variable and apply to the second variable to obtain the formula for .     As with the first chain rule, there are several ways to memorize this chain rule. The first is to consider the Jacobian matrix  . Then we can write the pair of equations in as the single vector equation , where we interpret as a column vector.  The second method is mnemonic. If we let and be the variables of , and and be the variables of , and we write for and for , and write the components of as and , then the chain rule reads that and that , so that the partials in the numerator and denominator again appear to cancel .     Suppose that that , and that . Compute .    First compute the partial derivatives of in and , and the partial derivatives of and in and .   We calculate that , that , that , that , that , and that     Now use the chain rule to compute the partial derivatives of in and .   Now we apply the chain rule, from which we conclude that Substituting and : Similarly for : Substituting and :       Use the Jacobian matrix version of the chain rule to calculate the partial derivatives of the function , where , and .    We compute that and that Since , we find that .      The Generalized Chain Rule  Now we obtain a generalize chain rule for the composition of functions of arbitrarily many variables.   Jacobian Matrix   For a vector-valued function given by where , the Jacobian matrix of is the matrix:      Generalized Chain Rule   Suppose and are differentiable functions. Then is differentiable, and , where the right hand side is defined by matrix multiplications. Equivalently, for , .     If is a scalar valued function, then the generalized chain rule tells us that as in the two variable case.     Suppose , and that . Compute the partial derivatives of .    We calculate that so that . Now . Thus . From this calculation, we can read that the partial derivative of in the first variable is equal to and the derivative in the second variable is .      More on the Jacobian matrix  The Jacobian matrix generalizes the concept of the derivative to a vector-valued function of multiple variables. It provides a compact representation of all first-order partial derivatives of a function.    Find the Jacobian matrix of .    For a scalar-valued function , the Jacobian is simply the gradient, i.e. . So .      Compute the Jacobian matrix of .    We compute that .      Compute the Jacobian matrix of the gradient function for .    First, let's compute the gradient of : So . The Jacobian of the gradient is . Note that this is the Hessian of (recall ).    Just as the gradient can be used to obtain a linear approximation of a scalar-valued function , we can use the Jacobian to obtain a linear approximation of a vector-valued function.   Linear Approximation of Vector-Valued Functions   Let be a vector-valued function. Provided that the partial derivatives of the components of all exist at , so that the Jacobian is well-defind, the linear approximation of at is the vector-valued function where is the Jacobian matrix of evaluated at , and then applied to the vector .  The components of are precisely the linear approximations of the components of , i.e. .     Geometrically, the graph of the linear approximation to a vector-valued function can be visualized as a higher dimensional tangent plane of the graph of the function at .    The linear approximation of a vector-valued function occurs in many contexts in applications, such as in Newton's method for solving systems of nonlinear equations, in optimization algorithms, and in understanding how small changes in inputs affect the outputs of complex functions. The generalized chain rule plays a fundamental role in deep learning and neural networks through the backpropagation algorithm. In backpropagation, gradients of the loss function are propagated backward through the network using successive applications of the chain rule, allowing the network to learn through gradient-based optimization. The efficient computation of these gradients relies critically on the matrix formulation of the chain rule above.     Let . Find the linear approximation of at the point , and use it to approximate .    We compute that . In particular, . SInce . So the linear approximation of at is the function . So .     "
},
{
  "id": "sec-the-chain-rule-3-2",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-3-2",
  "type": "Definition",
  "number": "8.3.1",
  "title": "Composite Function.",
  "body": " Composite Function   If and are multivariable functions, we can form a new composite function as follows. Take an input in , and then apply to the input to obtain a vector in . Apply to this vector to obtain a vector . This is the output of the composite function. In other words, out input is fed through the following diagram . We write the composite function as (the symbol should be read as composed with ). In symbols, the composite function is defined as .   "
},
{
  "id": "sec-the-chain-rule-3-3",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-3-3",
  "type": "Remark",
  "number": "8.3.2",
  "title": "",
  "body": " Note that the composite is only defined when the output of is a possible input to , i.e. the output of is , which is the space of inputs to .  "
},
{
  "id": "sec-the-chain-rule-3-5",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-3-5",
  "type": "Activity",
  "number": "8.3.1",
  "title": "",
  "body": "  Let and be linear transformations defined by their component functions as follows: .    Find the matrices and associated with these transformations, so that and (recall the notation from ).   We recall the method of . In particular, we obtain the first column of from the entries of , and the second column from . We calculate that and that . So the matrix is equal to .  Similarily, we calculate that , that , and that . So the matrix is given by .    Calculate the composite transformation and express it as a matrix transformation from to .   Recalling , we have that . Now Therefore, the composite transformation can be expressed as:    "
},
{
  "id": "sec-the-chain-rule-3-7",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-3-7",
  "type": "Activity",
  "number": "8.3.2",
  "title": "",
  "body": "  Consider and defined by . Find expressions for and .    We calculate that , and that .   "
},
{
  "id": "sec-the-chain-rule-3-8",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-3-8",
  "type": "Warning",
  "number": "8.3.3",
  "title": "",
  "body": " Observe that and are very different functions. We must therefore be careful that we compose functions in the correct order.  "
},
{
  "id": "sec-the-chain-rule-3-9",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-3-9",
  "type": "Activity",
  "number": "8.3.3",
  "title": "",
  "body": "  Consider and defined by     Find an expression for .   We calculate that .    Is the composition defined? Why or why not?   For the composition to be defined, the outputs of must be contained in the inputs of . But outputs points in , whereas takes in points in as input, so the composition does not make sense.   "
},
{
  "id": "sec-the-chain-rule-3-10",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-3-10",
  "type": "Remark",
  "number": "8.3.4",
  "title": "",
  "body": " Compositions of vector-valued functions play a key role in modern machine learning. The figures below illustrate how deep neural networks are composite functions.  "
},
{
  "id": "sec-9-2-chain-rule-1",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-9-2-chain-rule-1",
  "type": "Theorem",
  "number": "8.3.5",
  "title": "Chain Rule for One Independent Variable.",
  "body": " Chain Rule for One Independent Variable   Consider a scalar-valued function , and a vector-valued function of a single variable. Then the composition is a scalar-valued function of a single variable. If is differentiable at , and is differentiable at , then is differentiable at and , where and are the components of .    We note that the right hand side of the equation can be written as , where is the linear approximation of at . Because is differentiable, we know that . Now . Using these two equations (substituting for in the first equation), we find that . But recalling that , we conclude that .   "
},
{
  "id": "sec-the-chain-rule-4-5",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-4-5",
  "type": "Remark",
  "number": "8.3.6",
  "title": "",
  "body": " There are several ways to aid in remembering the formula for the chain rule. The first is to simplify the equation, writing it as so that the equation looks more like the chain rule from single variable calculus. The second is the following mnemonic: if we write for and for , and write the components of as and , then the chain rule reads that , so that the symbols and in the numerators on the right hand side, and the symbols and that occur in the denominators appear to cancel like when multiplying fractions.  "
},
{
  "id": "sec-the-chain-rule-4-6",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-4-6",
  "type": "Activity",
  "number": "8.3.4",
  "title": "",
  "body": "  Suppose , where and . Compute .    First, we need to calculate Now we substitute these into the chain rule formula: We can simplify this further if we want: Therefore,    "
},
{
  "id": "sec-the-chain-rule-4-7",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-4-7",
  "type": "Activity",
  "number": "8.3.5",
  "title": "",
  "body": "  If , and , find .    We calculate that and that . Now Thus .   "
},
{
  "id": "thm-chain-rule-2",
  "level": "2",
  "url": "sec-the-chain-rule.html#thm-chain-rule-2",
  "type": "Theorem",
  "number": "8.3.7",
  "title": "Chain Rule for Two Independent Variables.",
  "body": " Chain Rule for Two Independent Variables   Suppose is a scalar-valued function, and is a vector-valued function. Then is a scalar-valued function, and the two equations and hold.    Fix the second variable, and apply to the first to obtain the formula for . Then fix the first variable and apply to the second variable to obtain the formula for .   "
},
{
  "id": "sec-the-chain-rule-5-3",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-5-3",
  "type": "Remark",
  "number": "8.3.8",
  "title": "",
  "body": " As with the first chain rule, there are several ways to memorize this chain rule. The first is to consider the Jacobian matrix  . Then we can write the pair of equations in as the single vector equation , where we interpret as a column vector.  The second method is mnemonic. If we let and be the variables of , and and be the variables of , and we write for and for , and write the components of as and , then the chain rule reads that and that , so that the partials in the numerator and denominator again appear to cancel .  "
},
{
  "id": "sec-the-chain-rule-5-4",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-5-4",
  "type": "Activity",
  "number": "8.3.6",
  "title": "",
  "body": "  Suppose that that , and that . Compute .    First compute the partial derivatives of in and , and the partial derivatives of and in and .   We calculate that , that , that , that , that , and that     Now use the chain rule to compute the partial derivatives of in and .   Now we apply the chain rule, from which we conclude that Substituting and : Similarly for : Substituting and :    "
},
{
  "id": "sec-the-chain-rule-5-5",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-5-5",
  "type": "Activity",
  "number": "8.3.7",
  "title": "",
  "body": "  Use the Jacobian matrix version of the chain rule to calculate the partial derivatives of the function , where , and .    We compute that and that Since , we find that .   "
},
{
  "id": "sec-the-chain-rule-6-3",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-6-3",
  "type": "Definition",
  "number": "8.3.9",
  "title": "Jacobian Matrix.",
  "body": " Jacobian Matrix   For a vector-valued function given by where , the Jacobian matrix of is the matrix:    "
},
{
  "id": "sec-the-chain-rule-6-4",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-6-4",
  "type": "Theorem",
  "number": "8.3.10",
  "title": "Generalized Chain Rule.",
  "body": " Generalized Chain Rule   Suppose and are differentiable functions. Then is differentiable, and , where the right hand side is defined by matrix multiplications. Equivalently, for , .   "
},
{
  "id": "sec-the-chain-rule-6-5",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-6-5",
  "type": "Remark",
  "number": "8.3.11",
  "title": "",
  "body": " If is a scalar valued function, then the generalized chain rule tells us that as in the two variable case.  "
},
{
  "id": "sec-the-chain-rule-6-6",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-6-6",
  "type": "Activity",
  "number": "8.3.8",
  "title": "",
  "body": "  Suppose , and that . Compute the partial derivatives of .    We calculate that so that . Now . Thus . From this calculation, we can read that the partial derivative of in the first variable is equal to and the derivative in the second variable is .   "
},
{
  "id": "sec-the-chain-rule-7-3",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-7-3",
  "type": "Activity",
  "number": "8.3.9",
  "title": "",
  "body": "  Find the Jacobian matrix of .    For a scalar-valued function , the Jacobian is simply the gradient, i.e. . So .   "
},
{
  "id": "sec-the-chain-rule-7-4",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-7-4",
  "type": "Activity",
  "number": "8.3.10",
  "title": "",
  "body": "  Compute the Jacobian matrix of .    We compute that .   "
},
{
  "id": "sec-the-chain-rule-7-5",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-7-5",
  "type": "Activity",
  "number": "8.3.11",
  "title": "",
  "body": "  Compute the Jacobian matrix of the gradient function for .    First, let's compute the gradient of : So . The Jacobian of the gradient is . Note that this is the Hessian of (recall ).   "
},
{
  "id": "sec-the-chain-rule-7-7",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-7-7",
  "type": "Definition",
  "number": "8.3.12",
  "title": "Linear Approximation of Vector-Valued Functions.",
  "body": " Linear Approximation of Vector-Valued Functions   Let be a vector-valued function. Provided that the partial derivatives of the components of all exist at , so that the Jacobian is well-defind, the linear approximation of at is the vector-valued function where is the Jacobian matrix of evaluated at , and then applied to the vector .  The components of are precisely the linear approximations of the components of , i.e. .   "
},
{
  "id": "sec-the-chain-rule-7-8",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-7-8",
  "type": "Remark",
  "number": "8.3.13",
  "title": "",
  "body": " Geometrically, the graph of the linear approximation to a vector-valued function can be visualized as a higher dimensional tangent plane of the graph of the function at .  "
},
{
  "id": "sec-the-chain-rule-7-9",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-7-9",
  "type": "Remark",
  "number": "8.3.14",
  "title": "",
  "body": " The linear approximation of a vector-valued function occurs in many contexts in applications, such as in Newton's method for solving systems of nonlinear equations, in optimization algorithms, and in understanding how small changes in inputs affect the outputs of complex functions. The generalized chain rule plays a fundamental role in deep learning and neural networks through the backpropagation algorithm. In backpropagation, gradients of the loss function are propagated backward through the network using successive applications of the chain rule, allowing the network to learn through gradient-based optimization. The efficient computation of these gradients relies critically on the matrix formulation of the chain rule above.  "
},
{
  "id": "sec-the-chain-rule-7-10",
  "level": "2",
  "url": "sec-the-chain-rule.html#sec-the-chain-rule-7-10",
  "type": "Activity",
  "number": "8.3.12",
  "title": "",
  "body": "  Let . Find the linear approximation of at the point , and use it to approximate .    We compute that . In particular, . SInce . So the linear approximation of at is the function . So .   "
},
{
  "id": "sec-maxima-minima-problems",
  "level": "1",
  "url": "sec-maxima-minima-problems.html",
  "type": "Section",
  "number": "9.1",
  "title": "Optimization Problems and Critical Points",
  "body": " Optimization Problems and Critical Points   Optimization Problems  In this chapter, we apply multivariate calculus to solve some optimization problems .   Optimization Problems  Let be a scalar-valued function, and consider a set . Then we can consider two optimization problems, in which we call the objective function of the problem, and the feasible region of the optimization problem:  The minimization problem of on is the problem of finding such that the value is smallest among all elements of (so the function is minimized on by ).  The maximization problem of on is the problem of finding such that the value is largest among all elements of (so the function is maximized on by ).      A common optimization problem that we have already encountered in involves taking a subspace and a given vector , and finding the vector that is closest to , i.e. finding the vector that minimizes the scalar-valued function on , defined by setting . Then is the orthogonal projection of onto , and we have seen in that if has an orthogonal basis , then . Later on in this section we will show that one can obtain this formula using methods of optimization from calculus rather than the methods we used in .     Critical Points   Minima and Maxima   Suppose is a scalar-valued function. A point in the domain of is a  local minimum if there is a ball centered at such that whenever is in that ball, and also in the domain of . In this case, we say is a local minimum value for the function .  local maximum if there is a ball centered at such that whenever is in that ball, and also in the domain of . In this case, we say is a local maximum value for the function .  global minimum if for all in the domain of . In this case, is the global minimum value , or absolute minimum value , of the function .  global maximum if for all in the domain of . In this case, is the global maximum value , or absolute maximum value , of the function .  A local minimum or local maximum is also called a local extremum .      The graph of the function is obtained by reflecting the graph of the function in the output axis. This operation turns local and global maxima into local and global minima, and vice versa. So methods for finding minima for a general function often give methods for finding maxima, which makes the two problems often equivalent.     Critical Points   Suppose is a scalar-valued function that is differentiable at a point . Then we say is a critical point if .    For a scalar-valued function , a critical point is a solution to the two equations and .  Just as the derivative of a scalar-valued function of a single variable helps identify local minima and maxima, partial derivatives provide information about possible local minima\/maxima.    Suppose is a scalar-valued function that is differentiable at a point . If is also local extremum of , then is a critical point of .      Find the critical points of the function .    To find the critical points, we calculate the partial derivatives and set them equal to zero. We find that . The critical points are the pairs that simultaneously solve the equations and . So the only critical point is .      Find the critical points of .    We compute that and . The only such that and is . This is the only critical point.     "
},
{
  "id": "def-8-1-optimization",
  "level": "2",
  "url": "sec-maxima-minima-problems.html#def-8-1-optimization",
  "type": "Definition",
  "number": "9.1.1",
  "title": "Optimization Problems.",
  "body": " Optimization Problems  Let be a scalar-valued function, and consider a set . Then we can consider two optimization problems, in which we call the objective function of the problem, and the feasible region of the optimization problem:  The minimization problem of on is the problem of finding such that the value is smallest among all elements of (so the function is minimized on by ).  The maximization problem of on is the problem of finding such that the value is largest among all elements of (so the function is maximized on by ).    "
},
{
  "id": "sec-maxima-minima-problems-2-4",
  "level": "2",
  "url": "sec-maxima-minima-problems.html#sec-maxima-minima-problems-2-4",
  "type": "Example",
  "number": "9.1.2",
  "title": "",
  "body": " A common optimization problem that we have already encountered in involves taking a subspace and a given vector , and finding the vector that is closest to , i.e. finding the vector that minimizes the scalar-valued function on , defined by setting . Then is the orthogonal projection of onto , and we have seen in that if has an orthogonal basis , then . Later on in this section we will show that one can obtain this formula using methods of optimization from calculus rather than the methods we used in .  "
},
{
  "id": "sec-maxima-minima-problems-3-2",
  "level": "2",
  "url": "sec-maxima-minima-problems.html#sec-maxima-minima-problems-3-2",
  "type": "Definition",
  "number": "9.1.3",
  "title": "Minima and Maxima.",
  "body": " Minima and Maxima   Suppose is a scalar-valued function. A point in the domain of is a  local minimum if there is a ball centered at such that whenever is in that ball, and also in the domain of . In this case, we say is a local minimum value for the function .  local maximum if there is a ball centered at such that whenever is in that ball, and also in the domain of . In this case, we say is a local maximum value for the function .  global minimum if for all in the domain of . In this case, is the global minimum value , or absolute minimum value , of the function .  global maximum if for all in the domain of . In this case, is the global maximum value , or absolute maximum value , of the function .  A local minimum or local maximum is also called a local extremum .   "
},
{
  "id": "sec-maxima-minima-problems-3-3",
  "level": "2",
  "url": "sec-maxima-minima-problems.html#sec-maxima-minima-problems-3-3",
  "type": "Remark",
  "number": "9.1.4",
  "title": "",
  "body": "  The graph of the function is obtained by reflecting the graph of the function in the output axis. This operation turns local and global maxima into local and global minima, and vice versa. So methods for finding minima for a general function often give methods for finding maxima, which makes the two problems often equivalent.   "
},
{
  "id": "sec-maxima-minima-problems-3-4",
  "level": "2",
  "url": "sec-maxima-minima-problems.html#sec-maxima-minima-problems-3-4",
  "type": "Definition",
  "number": "9.1.5",
  "title": "Critical Points.",
  "body": " Critical Points   Suppose is a scalar-valued function that is differentiable at a point . Then we say is a critical point if .   "
},
{
  "id": "sec-maxima-minima-problems-3-7",
  "level": "2",
  "url": "sec-maxima-minima-problems.html#sec-maxima-minima-problems-3-7",
  "type": "Theorem",
  "number": "9.1.6",
  "title": "",
  "body": "  Suppose is a scalar-valued function that is differentiable at a point . If is also local extremum of , then is a critical point of .   "
},
{
  "id": "sec-maxima-minima-problems-3-8",
  "level": "2",
  "url": "sec-maxima-minima-problems.html#sec-maxima-minima-problems-3-8",
  "type": "Activity",
  "number": "9.1.1",
  "title": "",
  "body": "  Find the critical points of the function .    To find the critical points, we calculate the partial derivatives and set them equal to zero. We find that . The critical points are the pairs that simultaneously solve the equations and . So the only critical point is .   "
},
{
  "id": "sec-maxima-minima-problems-3-9",
  "level": "2",
  "url": "sec-maxima-minima-problems.html#sec-maxima-minima-problems-3-9",
  "type": "Activity",
  "number": "9.1.2",
  "title": "",
  "body": "  Find the critical points of .    We compute that and . The only such that and is . This is the only critical point.   "
},
{
  "id": "sec-second-derivative-test-and-saddle-points",
  "level": "1",
  "url": "sec-second-derivative-test-and-saddle-points.html",
  "type": "Section",
  "number": "9.2",
  "title": "The Second Derivative Test",
  "body": " The Second Derivative Test   The Two Variable Second Derivative Test  As in single-variable calculus, a critical point of a function is not necessarily a local extremum. This happens at a saddle point .    A critical point of a function which is not a local minimum or local maximum is called a saddle point .     A saddle point at the origin of the function . Note that along the -axis ( ), the function has a global maximum at , while along the -axis ( ), the function has a global minimum at . This combination of maximum in one direction and minimum in another is characteristic of saddle points.    The second derivative test provides a method for determining whether an local extremum occurs at a critical point of a function. The test is more complicated for two variable functions than the second derivative test for functions of a single variable, given that there are four second derivatives rather than just one derivative.   The Two Variable Second Derivative Test   Suppose is a scalar-function of two variables, and the first and second derivatives of are continuous on a disk containing some critical point for Define the discriminant  Then:   If and , then is a local minimum of .  If and , then is a local maximum of .  If , then is a saddle point .  If , then the test does not tell us whether is a local extremum.      From our current perspective, the second derivative test is quite mysterious. It seems unclear why the discriminant is able to detect local extrema. We will later see in , using our knowledge of linear algebra from , in particular the theory of eigenvalues, why the second derivative test detects local extrema, and also determine an analogue of the second derivative test for functions of more than two variables.     Use the second derivative test to determine if the critical point of found earlier is a local maximum, a local minimum, or a saddle point.    We apply the second derivative test. We compute the second-order partial derivatives of . We calculate that . So the discriminant is the constant function . Since the discriminant is positive, by the second derivative test, the critical point is a local minimum.      Use the second derivative test to analyze the critical point of found earlier.    We need to compute the second-order partial derivatives: . So the discriminant is also the constant function . Since the discriminant is negative, the second derivative test tells us that is a saddle point of .      Find all local maxima, local minima, and saddle points for the function .    We begin by finding the critical points of . We calculate that . So the critical points satisfy both and . The second equation is equivalent to , and substituting this equation into the first gives , so that the only critical point is .  To classify this critical point, we apply the second derivative test. We calculate that . So the discriminant is the constant function . Since the discriminant is positive, and is positive, this tells us that the critical point is a local minimum.    In the previous examples, the discriminant of the functions were constant because was a quadratic function. Let us consider an example where the discriminant is non-constant.    Find all local maxima, local minima, and saddle points for the function .    We begin by finding the critical point. We calculate that . Setting both equal to zero gives the pair of equations . We solve the second equation for , i.e. that , and then substitute this into the first equation, which leads to the equation , which simplifies to the quadratic equation . The quadratic equation tells us that the roots of this equation are given by the formula . So or . For each such , setting gives us a critical point for , so has two critical points, i.e. and .  To apply the second derivative test to each critical point, we calculate the discriminant of . We find that . So the discriminant is the function . So . Since is positive, and is positive, the critical point is a local minimum of the function . Since is negative, this tells us that is a saddle point of the function .      The following activity explains why we only look at in the first two cases of the second derivative test.      True or False: If , then and have the same sign.    True. If , then , so . Since is positive, this implies either both and are positive, or both and are negative. SO and always have the same sign when the discriminant is positive.      Saddle Points    If is a function with continuous second derivatives, then a point is a saddle point if and only if there are two lines through such that on one line, is a local minimum when restricted to this line, and restricted to the other line, is a local maximum.    As an example, the function has a saddle point at , because restricted to the line , , which has a local minimum at , whereas on the line , has a local maximum. See for a contour plot of this function.  Because a saddle point is both a local maximum and minimum when restricted to two lines, it's shape tends to resemble a horse's saddle, hence the term.   A contour plot of . From: Stanford's MATH 51 textbook      More formally, if the lines are given in parametric form by and , then we have verified the function has a saddle point if the function has a local maximum at , and the function has a local minimum at .     At a saddle point, a local minimum over y= 0 and local maximum over x= 0. From: Stanford's MATH 51 textbook      For each point in the figure below, indicate whether it is a local maximum, a local minimum, or a saddle point.   A contour plot with a variety of types of critical points. From: Stanford's MATH 51 textbook      If we look at the collection of nested ovals centered on , and inspect the numerical values labeling the level sets, we see those numbers are strictly increasing. These ovals seem to be honing in on a point that is a local maximum. Likewise, the collection of nested ovals near have function values going in a decreasing direction, suggesting is a local minimum. We also see saddle points at and . As we move away from in the north-east direction, the function value increases, whereas moving away in the south-east direction causes the function value to decrease. Near saddle points, the contour plot forms an \"X\" shape dividing the space into regions. Function values increase in one pair of opposite regions and decrease in the other pair. Near local extrema, level sets form oval shapes resembling ellipses.     "
},
{
  "id": "sec-second-derivative-test-and-saddle-points-2-3",
  "level": "2",
  "url": "sec-second-derivative-test-and-saddle-points.html#sec-second-derivative-test-and-saddle-points-2-3",
  "type": "Definition",
  "number": "9.2.1",
  "title": "",
  "body": "  A critical point of a function which is not a local minimum or local maximum is called a saddle point .   "
},
{
  "id": "sec-second-derivative-test-and-saddle-points-2-4",
  "level": "2",
  "url": "sec-second-derivative-test-and-saddle-points.html#sec-second-derivative-test-and-saddle-points-2-4",
  "type": "Figure",
  "number": "9.2.2",
  "title": "",
  "body": " A saddle point at the origin of the function . Note that along the -axis ( ), the function has a global maximum at , while along the -axis ( ), the function has a global minimum at . This combination of maximum in one direction and minimum in another is characteristic of saddle points.   "
},
{
  "id": "sec-second-derivative-test-and-saddle-points-2-6",
  "level": "2",
  "url": "sec-second-derivative-test-and-saddle-points.html#sec-second-derivative-test-and-saddle-points-2-6",
  "type": "Theorem",
  "number": "9.2.3",
  "title": "The Two Variable Second Derivative Test.",
  "body": " The Two Variable Second Derivative Test   Suppose is a scalar-function of two variables, and the first and second derivatives of are continuous on a disk containing some critical point for Define the discriminant  Then:   If and , then is a local minimum of .  If and , then is a local maximum of .  If , then is a saddle point .  If , then the test does not tell us whether is a local extremum.    "
},
{
  "id": "sec-second-derivative-test-and-saddle-points-2-7",
  "level": "2",
  "url": "sec-second-derivative-test-and-saddle-points.html#sec-second-derivative-test-and-saddle-points-2-7",
  "type": "Remark",
  "number": "9.2.4",
  "title": "",
  "body": " From our current perspective, the second derivative test is quite mysterious. It seems unclear why the discriminant is able to detect local extrema. We will later see in , using our knowledge of linear algebra from , in particular the theory of eigenvalues, why the second derivative test detects local extrema, and also determine an analogue of the second derivative test for functions of more than two variables.  "
},
{
  "id": "sec-second-derivative-test-and-saddle-points-2-8",
  "level": "2",
  "url": "sec-second-derivative-test-and-saddle-points.html#sec-second-derivative-test-and-saddle-points-2-8",
  "type": "Activity",
  "number": "9.2.1",
  "title": "",
  "body": "  Use the second derivative test to determine if the critical point of found earlier is a local maximum, a local minimum, or a saddle point.    We apply the second derivative test. We compute the second-order partial derivatives of . We calculate that . So the discriminant is the constant function . Since the discriminant is positive, by the second derivative test, the critical point is a local minimum.   "
},
{
  "id": "sec-second-derivative-test-and-saddle-points-2-9",
  "level": "2",
  "url": "sec-second-derivative-test-and-saddle-points.html#sec-second-derivative-test-and-saddle-points-2-9",
  "type": "Activity",
  "number": "9.2.2",
  "title": "",
  "body": "  Use the second derivative test to analyze the critical point of found earlier.    We need to compute the second-order partial derivatives: . So the discriminant is also the constant function . Since the discriminant is negative, the second derivative test tells us that is a saddle point of .   "
},
{
  "id": "sec-second-derivative-test-and-saddle-points-2-10",
  "level": "2",
  "url": "sec-second-derivative-test-and-saddle-points.html#sec-second-derivative-test-and-saddle-points-2-10",
  "type": "Activity",
  "number": "9.2.3",
  "title": "",
  "body": "  Find all local maxima, local minima, and saddle points for the function .    We begin by finding the critical points of . We calculate that . So the critical points satisfy both and . The second equation is equivalent to , and substituting this equation into the first gives , so that the only critical point is .  To classify this critical point, we apply the second derivative test. We calculate that . So the discriminant is the constant function . Since the discriminant is positive, and is positive, this tells us that the critical point is a local minimum.   "
},
{
  "id": "sec-second-derivative-test-and-saddle-points-2-12",
  "level": "2",
  "url": "sec-second-derivative-test-and-saddle-points.html#sec-second-derivative-test-and-saddle-points-2-12",
  "type": "Activity",
  "number": "9.2.4",
  "title": "",
  "body": "  Find all local maxima, local minima, and saddle points for the function .    We begin by finding the critical point. We calculate that . Setting both equal to zero gives the pair of equations . We solve the second equation for , i.e. that , and then substitute this into the first equation, which leads to the equation , which simplifies to the quadratic equation . The quadratic equation tells us that the roots of this equation are given by the formula . So or . For each such , setting gives us a critical point for , so has two critical points, i.e. and .  To apply the second derivative test to each critical point, we calculate the discriminant of . We find that . So the discriminant is the function . So . Since is positive, and is positive, the critical point is a local minimum of the function . Since is negative, this tells us that is a saddle point of the function .   "
},
{
  "id": "sec-second-derivative-test-and-saddle-points-2-13",
  "level": "2",
  "url": "sec-second-derivative-test-and-saddle-points.html#sec-second-derivative-test-and-saddle-points-2-13",
  "type": "Remark",
  "number": "9.2.5",
  "title": "",
  "body": "  The following activity explains why we only look at in the first two cases of the second derivative test.   "
},
{
  "id": "sec-second-derivative-test-and-saddle-points-2-14",
  "level": "2",
  "url": "sec-second-derivative-test-and-saddle-points.html#sec-second-derivative-test-and-saddle-points-2-14",
  "type": "Activity",
  "number": "9.2.5",
  "title": "",
  "body": "  True or False: If , then and have the same sign.    True. If , then , so . Since is positive, this implies either both and are positive, or both and are negative. SO and always have the same sign when the discriminant is positive.   "
},
{
  "id": "sec-second-derivative-test-and-saddle-points-3-2",
  "level": "2",
  "url": "sec-second-derivative-test-and-saddle-points.html#sec-second-derivative-test-and-saddle-points-3-2",
  "type": "Theorem",
  "number": "9.2.6",
  "title": "",
  "body": "  If is a function with continuous second derivatives, then a point is a saddle point if and only if there are two lines through such that on one line, is a local minimum when restricted to this line, and restricted to the other line, is a local maximum.   "
},
{
  "id": "fig-10-1-saddle-point-exampe",
  "level": "2",
  "url": "sec-second-derivative-test-and-saddle-points.html#fig-10-1-saddle-point-exampe",
  "type": "Figure",
  "number": "9.2.7",
  "title": "",
  "body": " A contour plot of . From: Stanford's MATH 51 textbook   "
},
{
  "id": "sec-second-derivative-test-and-saddle-points-3-6",
  "level": "2",
  "url": "sec-second-derivative-test-and-saddle-points.html#sec-second-derivative-test-and-saddle-points-3-6",
  "type": "Remark",
  "number": "9.2.8",
  "title": "",
  "body": "  More formally, if the lines are given in parametric form by and , then we have verified the function has a saddle point if the function has a local maximum at , and the function has a local minimum at .   "
},
{
  "id": "sec-second-derivative-test-and-saddle-points-3-7",
  "level": "2",
  "url": "sec-second-derivative-test-and-saddle-points.html#sec-second-derivative-test-and-saddle-points-3-7",
  "type": "Figure",
  "number": "9.2.9",
  "title": "",
  "body": " At a saddle point, a local minimum over y= 0 and local maximum over x= 0. From: Stanford's MATH 51 textbook   "
},
{
  "id": "sec-second-derivative-test-and-saddle-points-3-8",
  "level": "2",
  "url": "sec-second-derivative-test-and-saddle-points.html#sec-second-derivative-test-and-saddle-points-3-8",
  "type": "Activity",
  "number": "9.2.6",
  "title": "",
  "body": "  For each point in the figure below, indicate whether it is a local maximum, a local minimum, or a saddle point.   A contour plot with a variety of types of critical points. From: Stanford's MATH 51 textbook      If we look at the collection of nested ovals centered on , and inspect the numerical values labeling the level sets, we see those numbers are strictly increasing. These ovals seem to be honing in on a point that is a local maximum. Likewise, the collection of nested ovals near have function values going in a decreasing direction, suggesting is a local minimum. We also see saddle points at and . As we move away from in the north-east direction, the function value increases, whereas moving away in the south-east direction causes the function value to decrease. Near saddle points, the contour plot forms an \"X\" shape dividing the space into regions. Function values increase in one pair of opposite regions and decrease in the other pair. Near local extrema, level sets form oval shapes resembling ellipses.   "
},
{
  "id": "sec-directional-derivatives",
  "level": "1",
  "url": "sec-directional-derivatives.html",
  "type": "Section",
  "number": "9.3",
  "title": "Directional Derivatives and Gradient Descent",
  "body": " Directional Derivatives and Gradient Descent   Directional Derivatives    Find the system of equations satisfied by the critical points of the function .    We calculate that , that and that . So the critical points of are the solutions to the system of equations     .    Using the calculus we have developed, it is relatively simple given an expression defining a function to find a system of equations that defines the critical points of the equation. But as we see in the solution to , this system of equations, involving exponentials and trigonometric equations, may be impossible to solve analytically (unlike the systems of linear equations we studied earlier on this course, whose solutions we could always find exactly using the Gaussian elimination algorithm).  For systems of equations that cannot be solved analytically, numerical methods such as the method of gradient descent can be used to approximate the coordinates of critical points. Starting from an initial guess , the method of gradient descent generates a sequence of points that converge toward a critical point. The method involves by substracting by a suitable multiple of (the multiple used being called the step size ). In this section we explain why this method should converge to a critical point.  To discuss this further, we must introduce more general kinds of derivatives. Recall that the partial derivatives of a function are defined as . By replacing by a more general unit vector, we obtain the concept of a directional derivative .    Let be a scalar-valued function. Then if is a unit vector, the directional derivative of in the direction of the vector , denoted , is defined as , provided the limit exists.    The directional derivative represents the rate of change of the function at the point in the direction of the unit vector . For a function of two variables, the directional derivative is the slope of the tangent line to the curve obtained by intersecting the surface with the plane containing both the line passing through with direction vector , and the axis.    Partial derivatives are a special case of directional derivatives, i.e. we have .    Despite partial derivatives being a special case of directional derivatives, in most circumstances we can compute directional derivatives using partial derivatives, or equivalently, the gradient.    Suppose is a function differentiable at a point . Then for each unit vector , .    We apply the chain rule. We note that is equal to the derivative of the function at (both derivatives are defined as the same limits). If we write , then . But the chain rule ( ) implies that .     greatly simplifies the computations of directional derivatives.    Let .    Compute the directional derivative , where , and .   We begin by computing the gradient of at . We have . So , and in particular . So .    Find the directional derivative of at the point in the direction of the vector . That is, compute , where is the unit vector in the direction of .   The vector has magnitude . So . So .      Use the gradient of the function to find the directional derivative of at in the direction of the unit vector which we placed at points in the direction of the point .    The unit vector pointing in the direction from to is the unit vector pointing in the same direction as the vector . This vector has magnitude , so the unit vector pointing in this direction is equal to . Now , and in particular, . So .     Suppose . Find the directional derivative of the function at , in the direction of the unit vector which when placed at points in the direction of the point .   The unit vector is , and . So in particular .      Suppose that a function is differentiable at a point .  If , then for any unit vector .  If , then the unit vector which maximimizes the value of the directional derivative is given by the unit vector pointing in the direction of the gradient vector . Conversely, the unit vector which minimizes the value of the directional derivative is given by the unit vector pointing in the opposite direction of , i.e. the unit vector in the direction of the vector . Moreover, the magnitude of both of the directional derivatives at these two extrama is equal to .      We have already verified the theorem when in . When , and the Cauchy-Schwarz Inequality says that , where the inequality is an equality precisely when either points in the direction of , or points in the opposite of this direction. But when points in the direction of , i.e. when , we have . Conversely, one can check that when , then . So we see that these two vectors are precisely the maximizer and minimizer of the directional derivatives.     The gradient indicates the maximum and minimum values of the directional derivative at a point.      Find the direction for which the directional derivative of at is a maximum. What is the maximum value of the directional derivative?    First, we calculate that . So . tells us that the directional derivative is maximized when is the unit vector pointing in the direction of . Since has magnitude , we see the direction which maximizes the directional derivative is , and the value of the directional derivative in this direction is equal to the magnitude of the gradient, which is .      Gradient Descent    We now return to the gradient descent algorithm, a method for trying to approximate the local minima of a function . The algorithm works as follows:  Start at an initial point .  Compute the gradient .  Move in the direction of the negative gradient: set , where is a step size (or learning rate) parameter.  Repeat steps 2-3 with step sizes to successively define points , , and so on, with the hope that these points converge to a local minimum.    Intuitively, gradient descent works because each successive value is obtained by shifting the previous value in the direction in which the function decreases the fastest. The algorithm is likely to find local minima of a function , although a rigorous analysis of this algorithm is quite involved.      Find an approximate minimum of the function defined by using gradient descent. Use the starting point , a constant step size of , and stop after computing . You may use a calculator to perform these computations.    First, we calculate the gradient: Starting at , we successively compute that , so . We then compute that , so . Finally, we compute that , so . We note that for this function, we can precisely compute that has a critical point at , which by the second derivative test is a local minimum. So is not a good approximation to the local minimum. But if we continued to iterate this algorithm, we would find that the points for, say, , are very close to the true minimum of the function.      This algorithm can be rather cumbersome to compute by hand, but if the gradient of a function is easily determined, can be easily done to a large number of iterations on a computer.     Initial steps of gradient descent with starting point . The point is determined by the rule: . From: Stanford's MATH 51 textbook      Calculate in the direction of for the function     We compute that So the unit vector in the direction of is the vector Using the formula for the directional derivative, we find that . At the point , we evaluate that      "
},
{
  "id": "act-10-1-solve-equation",
  "level": "2",
  "url": "sec-directional-derivatives.html#act-10-1-solve-equation",
  "type": "Activity",
  "number": "9.3.1",
  "title": "",
  "body": "  Find the system of equations satisfied by the critical points of the function .    We calculate that , that and that . So the critical points of are the solutions to the system of equations     .   "
},
{
  "id": "def-10-1-directional-derivative",
  "level": "2",
  "url": "sec-directional-derivatives.html#def-10-1-directional-derivative",
  "type": "Definition",
  "number": "9.3.1",
  "title": "",
  "body": "  Let be a scalar-valued function. Then if is a unit vector, the directional derivative of in the direction of the vector , denoted , is defined as , provided the limit exists.   "
},
{
  "id": "sec-directional-derivatives-2-8",
  "level": "2",
  "url": "sec-directional-derivatives.html#sec-directional-derivatives-2-8",
  "type": "Remark",
  "number": "9.3.2",
  "title": "",
  "body": "  Partial derivatives are a special case of directional derivatives, i.e. we have .   "
},
{
  "id": "thm-10-1-direction-in-terms-of-gradient",
  "level": "2",
  "url": "sec-directional-derivatives.html#thm-10-1-direction-in-terms-of-gradient",
  "type": "Theorem",
  "number": "9.3.3",
  "title": "",
  "body": "  Suppose is a function differentiable at a point . Then for each unit vector , .    We apply the chain rule. We note that is equal to the derivative of the function at (both derivatives are defined as the same limits). If we write , then . But the chain rule ( ) implies that .   "
},
{
  "id": "sec-directional-derivatives-2-12",
  "level": "2",
  "url": "sec-directional-derivatives.html#sec-directional-derivatives-2-12",
  "type": "Activity",
  "number": "9.3.2",
  "title": "",
  "body": "  Let .    Compute the directional derivative , where , and .   We begin by computing the gradient of at . We have . So , and in particular . So .    Find the directional derivative of at the point in the direction of the vector . That is, compute , where is the unit vector in the direction of .   The vector has magnitude . So . So .   "
},
{
  "id": "sec-directional-derivatives-2-13",
  "level": "2",
  "url": "sec-directional-derivatives.html#sec-directional-derivatives-2-13",
  "type": "Activity",
  "number": "9.3.3",
  "title": "",
  "body": "  Use the gradient of the function to find the directional derivative of at in the direction of the unit vector which we placed at points in the direction of the point .    The unit vector pointing in the direction from to is the unit vector pointing in the same direction as the vector . This vector has magnitude , so the unit vector pointing in this direction is equal to . Now , and in particular, . So .   "
},
{
  "id": "sec-directional-derivatives-2-14",
  "level": "2",
  "url": "sec-directional-derivatives.html#sec-directional-derivatives-2-14",
  "type": "Activity",
  "number": "9.3.4",
  "title": "",
  "body": " Suppose . Find the directional derivative of the function at , in the direction of the unit vector which when placed at points in the direction of the point .   The unit vector is , and . So in particular .   "
},
{
  "id": "thm-10-1-directional-derivative-extrema",
  "level": "2",
  "url": "sec-directional-derivatives.html#thm-10-1-directional-derivative-extrema",
  "type": "Theorem",
  "number": "9.3.4",
  "title": "",
  "body": "  Suppose that a function is differentiable at a point .  If , then for any unit vector .  If , then the unit vector which maximimizes the value of the directional derivative is given by the unit vector pointing in the direction of the gradient vector . Conversely, the unit vector which minimizes the value of the directional derivative is given by the unit vector pointing in the opposite direction of , i.e. the unit vector in the direction of the vector . Moreover, the magnitude of both of the directional derivatives at these two extrama is equal to .      We have already verified the theorem when in . When , and the Cauchy-Schwarz Inequality says that , where the inequality is an equality precisely when either points in the direction of , or points in the opposite of this direction. But when points in the direction of , i.e. when , we have . Conversely, one can check that when , then . So we see that these two vectors are precisely the maximizer and minimizer of the directional derivatives.   "
},
{
  "id": "sec-directional-derivatives-2-16",
  "level": "2",
  "url": "sec-directional-derivatives.html#sec-directional-derivatives-2-16",
  "type": "Figure",
  "number": "9.3.5",
  "title": "",
  "body": " The gradient indicates the maximum and minimum values of the directional derivative at a point.   "
},
{
  "id": "sec-directional-derivatives-2-17",
  "level": "2",
  "url": "sec-directional-derivatives.html#sec-directional-derivatives-2-17",
  "type": "Activity",
  "number": "9.3.5",
  "title": "",
  "body": "  Find the direction for which the directional derivative of at is a maximum. What is the maximum value of the directional derivative?    First, we calculate that . So . tells us that the directional derivative is maximized when is the unit vector pointing in the direction of . Since has magnitude , we see the direction which maximizes the directional derivative is , and the value of the directional derivative in this direction is equal to the magnitude of the gradient, which is .   "
},
{
  "id": "sec-directional-derivatives-3-2",
  "level": "2",
  "url": "sec-directional-derivatives.html#sec-directional-derivatives-3-2",
  "type": "Remark",
  "number": "9.3.6",
  "title": "",
  "body": "  We now return to the gradient descent algorithm, a method for trying to approximate the local minima of a function . The algorithm works as follows:  Start at an initial point .  Compute the gradient .  Move in the direction of the negative gradient: set , where is a step size (or learning rate) parameter.  Repeat steps 2-3 with step sizes to successively define points , , and so on, with the hope that these points converge to a local minimum.    Intuitively, gradient descent works because each successive value is obtained by shifting the previous value in the direction in which the function decreases the fastest. The algorithm is likely to find local minima of a function , although a rigorous analysis of this algorithm is quite involved.   "
},
{
  "id": "sec-directional-derivatives-3-3",
  "level": "2",
  "url": "sec-directional-derivatives.html#sec-directional-derivatives-3-3",
  "type": "Activity",
  "number": "9.3.6",
  "title": "",
  "body": "  Find an approximate minimum of the function defined by using gradient descent. Use the starting point , a constant step size of , and stop after computing . You may use a calculator to perform these computations.    First, we calculate the gradient: Starting at , we successively compute that , so . We then compute that , so . Finally, we compute that , so . We note that for this function, we can precisely compute that has a critical point at , which by the second derivative test is a local minimum. So is not a good approximation to the local minimum. But if we continued to iterate this algorithm, we would find that the points for, say, , are very close to the true minimum of the function.   "
},
{
  "id": "sec-directional-derivatives-3-4",
  "level": "2",
  "url": "sec-directional-derivatives.html#sec-directional-derivatives-3-4",
  "type": "Remark",
  "number": "9.3.7",
  "title": "",
  "body": "  This algorithm can be rather cumbersome to compute by hand, but if the gradient of a function is easily determined, can be easily done to a large number of iterations on a computer.   "
},
{
  "id": "sec-directional-derivatives-3-5",
  "level": "2",
  "url": "sec-directional-derivatives.html#sec-directional-derivatives-3-5",
  "type": "Figure",
  "number": "9.3.8",
  "title": "",
  "body": " Initial steps of gradient descent with starting point . The point is determined by the rule: . From: Stanford's MATH 51 textbook   "
},
{
  "id": "sec-directional-derivatives-3-6",
  "level": "2",
  "url": "sec-directional-derivatives.html#sec-directional-derivatives-3-6",
  "type": "Activity",
  "number": "9.3.7",
  "title": "",
  "body": "  Calculate in the direction of for the function     We compute that So the unit vector in the direction of is the vector Using the formula for the directional derivative, we find that . At the point , we evaluate that    "
},
{
  "id": "sec-absolute-maxima",
  "level": "1",
  "url": "sec-absolute-maxima.html",
  "type": "Section",
  "number": "9.4",
  "title": "Absolute Maxima and Minima",
  "body": " Absolute Maxima and Minima  Recall what it means for a set to be closed from .    Determine whether each of the given regions is closed.    The region .   The set is the interior of the unit disk, which doesn't include any of the points in the circle , which are the boundary points of the set.    The region    The set is closed, because the set of boundary points of is equal to itself.        The set is closed. The boundary points are the set of points such that either   and .   and .   and .   and .  The set contains all such points, and so is closed.    The set    The set is not closed. The set of boudnary points of is the set , which is not contained in .      If is a scalar-valued function which is continuous on a closed and bounded set , then has an absolute maximum and an absolute minimum value on .    The second derivative test informs us whether a critical point is a local maximum, a local minimum, or a saddle point. However, it doesn't identify global (absolute) extrema. For functions defined on closed, bounded regions, we can use the following procedure to find absolute extrema, provided that the boundary points of the region are of a suitably simple nature.    Given a function , continuous on a closed bounded set , this algorithm will find the absolute maxima and minima of the function .    Find all critical points of on the interior of the set .  Find the absolute maximum of among all boundary points of the set .  The largest and smallest values of given by the points found in the first two steps give the absolute minimum and maximum values of the function, and the inputs that gives these values are the absolute minima and maxima.      If the boundary of the set forms a curve (minus finitely many extraneous points), we may parameterize the curve, and find the absolute minima and maximia using the techniques of single variable calculus (i.e. by finding critical points of a function of a single variable).   A variety of potential local extrema for a function on a rectangle. From: Stanford's MATH 51 textbook      Consider the function on the unit square   Find the absolute maximum and minimum values of on .    The set is closed and bounded, so we can apply .  We start by finding the critical points of the function on the interior of the closed set , i.e. on the set . We compute that . These two quantities vanishes simultaneously at the point , which is therefore the only critical point of . At this point .  Now we check the boundary of the function . The boundary is the union of four curves, and so we can parameterize these curves, and find the critical points of the parameterization, to determine potential absolute minima and maxima on these curves (treating the corners of separately).  On the bottom edge , the function takes the form . The only critical point of the expression occurs at , and . Similarily, on the top edge , the function takes the form . As for the bottom edge, the only critical point of the expression occurs at , and . On the left edge , the function takes the form . The only critical point of the expression occurs when , and . Similarily, on the right edge , the function takes the form . The only critical point of this expression occurs when , and . Out of the four critical points we have calculated, the only potential absolute minima occurs at , where has value , and the only potential absolute maxima occurs at , where has value .  Finally, we must check the value of the function at the four corners , , , and . We calculate that , , , and .  Comparing all values, we see that the absolute maximum of on occurs at , with maximum value , and the absolute minimum occurs at , with minimum value .     Critical points on : interior point (red), edge points (blue), corners (green). From: Stanford's MATH 51 textbook      In this exercise, we compute the absolute minimum of the function for and .    Start by finding all critical points on the interior of the domain upon which we are trying to optimize .   The interior region is defined by the equations and . We calculate that , and so the only critical point occurs at the point . Here we have .    Next, find the maximum and minimum values on the interior of the boundary curves of the region, and on the corners of the region.   The boundary curves consist of the following four regions:  Bottom edge: ,  Right edge: ,  Top edge: ,  Left edge: ,  We begin by computing critical points on the interior of the curves, once parameterized.  On the bottom edge , we have , an expression with no critical points. On the top edge , we have , which also has no critical points. On the left edge , we have , which has a critical point at , but this is not in the interior of the curve. On the right edge , we have , which has a critical point when , which is not in the region . So there are no critical points on the interior of the boundary curves.  Nonetheless, we must also compute the values of the function directly on the four corners. We have , , , and .    Finally, compare all values.   Comparing all values of the possible minima and maxima we have collected, we see that the absolute minimum of the function on occurs at , where , and the absolute maxima of the function occurs at , where .    "
},
{
  "id": "sec-absolute-maxima-3",
  "level": "2",
  "url": "sec-absolute-maxima.html#sec-absolute-maxima-3",
  "type": "Activity",
  "number": "9.4.1",
  "title": "",
  "body": "  Determine whether each of the given regions is closed.    The region .   The set is the interior of the unit disk, which doesn't include any of the points in the circle , which are the boundary points of the set.    The region    The set is closed, because the set of boundary points of is equal to itself.        The set is closed. The boundary points are the set of points such that either   and .   and .   and .   and .  The set contains all such points, and so is closed.    The set    The set is not closed. The set of boudnary points of is the set , which is not contained in .   "
},
{
  "id": "sec-absolute-maxima-4",
  "level": "2",
  "url": "sec-absolute-maxima.html#sec-absolute-maxima-4",
  "type": "Theorem",
  "number": "9.4.1",
  "title": "",
  "body": "  If is a scalar-valued function which is continuous on a closed and bounded set , then has an absolute maximum and an absolute minimum value on .   "
},
{
  "id": "alg-10-1-finding-maxima-and-minima",
  "level": "2",
  "url": "sec-absolute-maxima.html#alg-10-1-finding-maxima-and-minima",
  "type": "Algorithm",
  "number": "9.4.2",
  "title": "",
  "body": "  Given a function , continuous on a closed bounded set , this algorithm will find the absolute maxima and minima of the function .    Find all critical points of on the interior of the set .  Find the absolute maximum of among all boundary points of the set .  The largest and smallest values of given by the points found in the first two steps give the absolute minimum and maximum values of the function, and the inputs that gives these values are the absolute minima and maxima.     "
},
{
  "id": "sec-absolute-maxima-8",
  "level": "2",
  "url": "sec-absolute-maxima.html#sec-absolute-maxima-8",
  "type": "Figure",
  "number": "9.4.3",
  "title": "",
  "body": " A variety of potential local extrema for a function on a rectangle. From: Stanford's MATH 51 textbook   "
},
{
  "id": "sec-absolute-maxima-9",
  "level": "2",
  "url": "sec-absolute-maxima.html#sec-absolute-maxima-9",
  "type": "Activity",
  "number": "9.4.2",
  "title": "",
  "body": "  Consider the function on the unit square   Find the absolute maximum and minimum values of on .    The set is closed and bounded, so we can apply .  We start by finding the critical points of the function on the interior of the closed set , i.e. on the set . We compute that . These two quantities vanishes simultaneously at the point , which is therefore the only critical point of . At this point .  Now we check the boundary of the function . The boundary is the union of four curves, and so we can parameterize these curves, and find the critical points of the parameterization, to determine potential absolute minima and maxima on these curves (treating the corners of separately).  On the bottom edge , the function takes the form . The only critical point of the expression occurs at , and . Similarily, on the top edge , the function takes the form . As for the bottom edge, the only critical point of the expression occurs at , and . On the left edge , the function takes the form . The only critical point of the expression occurs when , and . Similarily, on the right edge , the function takes the form . The only critical point of this expression occurs when , and . Out of the four critical points we have calculated, the only potential absolute minima occurs at , where has value , and the only potential absolute maxima occurs at , where has value .  Finally, we must check the value of the function at the four corners , , , and . We calculate that , , , and .  Comparing all values, we see that the absolute maximum of on occurs at , with maximum value , and the absolute minimum occurs at , with minimum value .   "
},
{
  "id": "sec-absolute-maxima-10",
  "level": "2",
  "url": "sec-absolute-maxima.html#sec-absolute-maxima-10",
  "type": "Figure",
  "number": "9.4.4",
  "title": "",
  "body": " Critical points on : interior point (red), edge points (blue), corners (green). From: Stanford's MATH 51 textbook   "
},
{
  "id": "sec-absolute-maxima-11",
  "level": "2",
  "url": "sec-absolute-maxima.html#sec-absolute-maxima-11",
  "type": "Activity",
  "number": "9.4.3",
  "title": "",
  "body": "  In this exercise, we compute the absolute minimum of the function for and .    Start by finding all critical points on the interior of the domain upon which we are trying to optimize .   The interior region is defined by the equations and . We calculate that , and so the only critical point occurs at the point . Here we have .    Next, find the maximum and minimum values on the interior of the boundary curves of the region, and on the corners of the region.   The boundary curves consist of the following four regions:  Bottom edge: ,  Right edge: ,  Top edge: ,  Left edge: ,  We begin by computing critical points on the interior of the curves, once parameterized.  On the bottom edge , we have , an expression with no critical points. On the top edge , we have , which also has no critical points. On the left edge , we have , which has a critical point at , but this is not in the interior of the curve. On the right edge , we have , which has a critical point when , which is not in the region . So there are no critical points on the interior of the boundary curves.  Nonetheless, we must also compute the values of the function directly on the four corners. We have , , , and .    Finally, compare all values.   Comparing all values of the possible minima and maxima we have collected, we see that the absolute minimum of the function on occurs at , where , and the absolute maxima of the function occurs at , where .   "
},
{
  "id": "sec-general-second-derivative-test",
  "level": "1",
  "url": "sec-general-second-derivative-test.html",
  "type": "Section",
  "number": "9.5",
  "title": "The Second Derivative Test Redux",
  "body": " The Second Derivative Test Redux   In this subsection, we now obtain a form of the second derivative test for scalar-valued functions with more than two variables.    Quadratic Approximation and Quadratic Forms  Recall that if a single-variable function has derivatives at , then the th Taylor polynomial for at is the function . In particular, for we obtain the linear approximation  of , and for we obtain the quadratic approximation  . The Taylor polynomial approximates the function near , with the approximation improving as increases.    Consider the function .  (a) Find the first and second Taylor polynomials for at .    For , the values of the function and its first two derivatives at are as follows: Thus, the first and second Taylor polynomials at are given by:       (b) Use these two polynomials to estimate .    Using the first Taylor polynomial at , we can estimate: Using the second Taylor polynomial at , we obtain:     If is a critical point of , then the quadratic approximation of is given by the expression If , then the quadratic approximation of is an upward pointing parabola with a vertex at . This approximation has a minimum at this vertex, explaining is a local minimum of the function (since is closely approximated by it's quadratic approximation). Similarily, if , then the quadratic approximation is a downward pointing parabola with a maximum at , explaining why is a local maximum of the function .  This explanation indicates how the second derivative test might work for a multi variable function. We obtain an analogue of the quadratic approximation of such a function. Then, if that quadratic approximation has a maximum or minumum at the critical point, then the actual function has a local minimum or maximum near that point. The quadratic approximation of the function is defined in terms of the Hessian of (recall ).   Quadratic Approximation   The quadratic approximation  of a scalar-valued function near a point is the function defined by .     The quadratic approximation of a function refines the linear approximation via the gradient that we previously encountered. In particular, if the second derivatives of are continuous, then . If is close to , then is much smaller than , so that the quadratic approximation to is in general a much better approximation thatn the linear approximation .     Compute the gradient and the Hessian of the function at the point , use these values to determine the quadratic approximation to at the point , and then use the quadratic approximation to estimate the value of at .    We calculate that . So . Next, we compute that . Evaluating at , we find that . Since , using the Hessian and gradient, we find that the quadratic approximation of near is given by . So . Up to four decimals, the best approximation of is , so the quadratic approximation is quite accurate. For comparision, the linear comparison at is given by , which is far less accurate.      Let . Use the gradient and Hessian to obtain a quadratic approximation of the function near .    We calculate that In particular, . Next, we calculate that So Since , the quadratic approximation of at is thus given by .    If is a critical point of a function , then the quadratic approximation of the function takes the form , and so it suffices to understand the quadratic form associated with the Hessian matrix.    The quadratic form associated with an matrix is the scalar-valued function on defined by .    If we can understand quadratic forms, we can understand the quadratic approximations of functions at critical points.    For a symmetric matrix , write out the quadratic form explicitly in terms of the entries of and the components of .     Since is symmetric, we have for all . Using this property:      More generally, for a symmetric matrix , the quadratic form can be written as: In particular, note that if is a diagonal matrix, then which is simple to understand. We will use spectral theory to show that a rotation of a coordinate system reduces a quadratic form to a quadratic form defined by a diagonal matrix. The signs of the diagonal entries will then tell us the behaviour of the critical.   Recall the spectral theorem, i.e. , which says that there is an orthogonal matrix so that is a diagonal matrix .   Diagonalization Theorem   Consider a quadratic form , defined in terms of a symmetric matrix . Suppose is an orthogonal matrix such that is a diagonal matrix with entries (i.e. the eigenvalues of ). If we set , then .    We calculate that (since is the inverse of ), so .     The Principal Axes   If is a symmetric, matrix, then an orthonormal basis of eigenvectors of is called a set of principal axes for the quadratic form .      Consider the quadratic form .    Find the symmetric matrix such that , i.e. such that .   If , then . So , , and , i.e. .    Find the eigenvalues and a basis of eigenvectors for .   The characteristic polynomial of (recall ) is given by . So and are the two eigenvalues of .  For the eigenvalue , we solve : That is, . Taking , we get . So an eigenvector for is . For the eigenvalue , we solve : That is, . Taking , we get . So an eigenvector for is .    (c) Apply the previous theorem to express in terms of new coordinates and that eliminate the cross term.   We first normalize the eigenvectors to get: The orthogonal matrix with these unit eigenvectors as columns diagonalizes . When we express a vector , the quadratic form becomes: .      Consider the quadratic form .    Find the symmetric matrix such that .   The matrix is .    Find the eigenvalues and corresponding eigenvectors of .   We seek to solve: Using the quadratic formula: So the eigenvalues are and . For eigenvalue , we solve : That is, . Taking , we get . So is an eigenvector for . For the eigenvalue , we solve : That is, . Taking , we get . So an eigenvector for is .    Apply the previous theorem to express in terms of new coordinates and that eliminate the cross term, and classify the level curves for different values of .   We first normalize the eigenvectors to get: The orthogonal matrix with these unit eigenvectors as columns diagonalizes . When we express a vector , the quadratic form becomes:      Positive Definite and Negative Definite Matrices   A symmetric matrix is called positive definite if it all its eigenvalues are strictly positive. It is negative definite if all its eigenvalues are non-positive. It is indefinite if it has both strictly positive and strictly negative eigenvalues.      A symmetric matrix is positive definite if and only if for every vector in . It is negative definite if and only if for every vector .    This follows from .      The Second Derivative Test   Second Derivative Test   Let be a function, and suppose is a critical point of .  If the Hessian is positive definite then is a local minimum of .  If the Hessian is negative definite then is a local maximum of .  If the Hessian is indefinite then is a saddle point of .  In any other cases, the test gives no information.    If is a critical point of then the quadratic approximation of at is given by , where . If is positive definite, then by ,, has a minimum at , so has a local minimum at this point. If is negative definite, then by ,, has a maximum at , so has a local maximum at this point. If is indefinite, then by the function has a saddle point at , so the same is true for .      Show that a matrix is positive definite if and only if is positive and , negative definite if and only if is positive and , and indefinite if and only if is negative. It follows from this that the second derivative test in two variables is just a special case of the second derivative test above.    If has eigenvalues and , then (the determinant of two similiar matrices is the same). So if is positive, and are either both positive (and the matrix is positive definite) or both negative (and so the matrix is negative definite). Conversely, if is negative, and have opposite signs, so the matrix is indefinite.  If is positive, then is positive. If and are both positive, then the characteristic polynomial of this matrix is given by . This is a quadratic equation with vertex at , which is positive. There must exist a root of the equation to the right of the vertex, so the characteristic polynomial has a positive root (and thus both roots are positive). Conversely, if and are both negative, then the characteristic polynomial has a vertex to the left of the -axis, and so has a negative root (and thus both roots are negative).      Consider the function . Find all critical points of and determine the behavior of near each critical point.    First find the critical points.   We compute that , which vanishes only at , which is the only critical point.    Now classify each critical point.   The Hessian of is the constant matrix . The characteristic polynomial of is . So all roots of the characteristic polynomial are positive, so all eigenvalues of are positive, and so is positive definite. So we conclude that is a local minimum of .      Classify the critical points of the function using the second derivative test.    We compute that . Notice that is non-vanishing, so that there are no critical points on the plane . Now suppose that and . The third entry tells us that . Substituting this into the second equation gives that , i.e. that . Substituting this into the first equation gives that , i.e. that or . Back propogation then gives the two critical points of , namely and .  Next, we classify these critical points. We calculate that the Hessian of is . In particular, , which has characteristic polynomial . So has eigenvalues and , and so is indefinite, so that has a saddle point at . We have , which has characteristic polynomial , so has eigenvalues and , and is thus an indeterminate matrix. So is also a saddle point of .      The Least Squares Problem  We conclude this section with an example that illustrates how the optimization techniques we have developed can be used to solve a very common optimization problem, the least squares problem , which occurs often in the study of linear regression and other related problems in data science.  For a matrix , consider the problem of finding the minimum of the quantity . We now use the methods of optimization we have developed to solve this problem in a series of exercises.   Compute the gradient and Jacobians of the following functions:   The gradient of , for a fixed vector .   Expanding in components, , and we see that , i.e. so that .    The gradient of , for an matrix .   We start by using the identity . So the derivative of this quantity in the variable is . So the gradient of is .    The Jacobian of the vector-valued function , where is a fixed matrix.   We write , so , and so .      Let be an matrix with linearly independent columns and suppose . Consider the least squares problem     Find the critical points of the function .   We epand . Taking gradients thus gives that . So the critical points of occur when . This vector-equation is called the normal equation for the least squares problem.      Determine whether any critical point is a local minimum, local maximum, or saddle point. Using this information, solve the least squares optimization problem.    Recall the Hessian is the Jacobian of the gradient, and hence . So we need to determine whether is positive definite, negative definite, or indefinite. Let's consider the quadratic form for any non-zero vector : Since for - to see why, has linearly independent columns and so has rank and thus by the rank nullity theorem must have nullity zero, and this means . So we conclude that is always positive when . But if is a unit eigenvector for with eigenvalue , then we also find that , which must be positive since is always positive. So only has positive eigenvalues. So is positive definite by , and so has a local minimum at any critical point.  Since only has positive eigenvalues, it also must be an invertible matrix. But this means that the least squares problem has a single global optimum, at the unique solution to the normal equation , i.e. for . So we have found a minimizer to the least squares problem.     "
},
{
  "id": "sec-10-1-second-derivtive-test-3",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-10-1-second-derivtive-test-3",
  "type": "Activity",
  "number": "9.5.1",
  "title": "",
  "body": "  Consider the function .  (a) Find the first and second Taylor polynomials for at .    For , the values of the function and its first two derivatives at are as follows: Thus, the first and second Taylor polynomials at are given by:    "
},
{
  "id": "sec-10-1-second-derivtive-test-4",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-10-1-second-derivtive-test-4",
  "type": "Activity",
  "number": "9.5.2",
  "title": "",
  "body": "  (b) Use these two polynomials to estimate .    Using the first Taylor polynomial at , we can estimate: Using the second Taylor polynomial at , we obtain:    "
},
{
  "id": "sec-10-1-second-derivtive-test-7",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-10-1-second-derivtive-test-7",
  "type": "Definition",
  "number": "9.5.1",
  "title": "Quadratic Approximation.",
  "body": " Quadratic Approximation   The quadratic approximation  of a scalar-valued function near a point is the function defined by .   "
},
{
  "id": "sec-10-1-second-derivtive-test-8",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-10-1-second-derivtive-test-8",
  "type": "Remark",
  "number": "9.5.2",
  "title": "",
  "body": " The quadratic approximation of a function refines the linear approximation via the gradient that we previously encountered. In particular, if the second derivatives of are continuous, then . If is close to , then is much smaller than , so that the quadratic approximation to is in general a much better approximation thatn the linear approximation .  "
},
{
  "id": "sec-10-1-second-derivtive-test-9",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-10-1-second-derivtive-test-9",
  "type": "Activity",
  "number": "9.5.3",
  "title": "",
  "body": "  Compute the gradient and the Hessian of the function at the point , use these values to determine the quadratic approximation to at the point , and then use the quadratic approximation to estimate the value of at .    We calculate that . So . Next, we compute that . Evaluating at , we find that . Since , using the Hessian and gradient, we find that the quadratic approximation of near is given by . So . Up to four decimals, the best approximation of is , so the quadratic approximation is quite accurate. For comparision, the linear comparison at is given by , which is far less accurate.   "
},
{
  "id": "sec-10-1-second-derivtive-test-10",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-10-1-second-derivtive-test-10",
  "type": "Activity",
  "number": "9.5.4",
  "title": "",
  "body": "  Let . Use the gradient and Hessian to obtain a quadratic approximation of the function near .    We calculate that In particular, . Next, we calculate that So Since , the quadratic approximation of at is thus given by .   "
},
{
  "id": "sec-10-1-second-derivtive-test-11",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-10-1-second-derivtive-test-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quadratic form "
},
{
  "id": "sec-10-1-second-derivtive-test-12",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-10-1-second-derivtive-test-12",
  "type": "Definition",
  "number": "9.5.3",
  "title": "",
  "body": "  The quadratic form associated with an matrix is the scalar-valued function on defined by .   "
},
{
  "id": "sec-10-1-second-derivtive-test-14",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-10-1-second-derivtive-test-14",
  "type": "Activity",
  "number": "9.5.5",
  "title": "",
  "body": "  For a symmetric matrix , write out the quadratic form explicitly in terms of the entries of and the components of .     Since is symmetric, we have for all . Using this property:    "
},
{
  "id": "sec-10-1-second-derivtive-test-15",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-10-1-second-derivtive-test-15",
  "type": "Remark",
  "number": "9.5.4",
  "title": "",
  "body": " More generally, for a symmetric matrix , the quadratic form can be written as: In particular, note that if is a diagonal matrix, then which is simple to understand. We will use spectral theory to show that a rotation of a coordinate system reduces a quadratic form to a quadratic form defined by a diagonal matrix. The signs of the diagonal entries will then tell us the behaviour of the critical.  "
},
{
  "id": "thm-10-1-diagonalization-theorem",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#thm-10-1-diagonalization-theorem",
  "type": "Theorem",
  "number": "9.5.5",
  "title": "Diagonalization Theorem.",
  "body": " Diagonalization Theorem   Consider a quadratic form , defined in terms of a symmetric matrix . Suppose is an orthogonal matrix such that is a diagonal matrix with entries (i.e. the eigenvalues of ). If we set , then .    We calculate that (since is the inverse of ), so .   "
},
{
  "id": "sec-10-1-second-derivtive-test-18",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-10-1-second-derivtive-test-18",
  "type": "Definition",
  "number": "9.5.6",
  "title": "The Principal Axes.",
  "body": " The Principal Axes   If is a symmetric, matrix, then an orthonormal basis of eigenvectors of is called a set of principal axes for the quadratic form .   "
},
{
  "id": "sec-10-1-second-derivtive-test-19",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-10-1-second-derivtive-test-19",
  "type": "Activity",
  "number": "9.5.6",
  "title": "",
  "body": "  Consider the quadratic form .    Find the symmetric matrix such that , i.e. such that .   If , then . So , , and , i.e. .    Find the eigenvalues and a basis of eigenvectors for .   The characteristic polynomial of (recall ) is given by . So and are the two eigenvalues of .  For the eigenvalue , we solve : That is, . Taking , we get . So an eigenvector for is . For the eigenvalue , we solve : That is, . Taking , we get . So an eigenvector for is .    (c) Apply the previous theorem to express in terms of new coordinates and that eliminate the cross term.   We first normalize the eigenvectors to get: The orthogonal matrix with these unit eigenvectors as columns diagonalizes . When we express a vector , the quadratic form becomes: .   "
},
{
  "id": "sec-10-1-second-derivtive-test-20",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-10-1-second-derivtive-test-20",
  "type": "Activity",
  "number": "9.5.7",
  "title": "",
  "body": "  Consider the quadratic form .    Find the symmetric matrix such that .   The matrix is .    Find the eigenvalues and corresponding eigenvectors of .   We seek to solve: Using the quadratic formula: So the eigenvalues are and . For eigenvalue , we solve : That is, . Taking , we get . So is an eigenvector for . For the eigenvalue , we solve : That is, . Taking , we get . So an eigenvector for is .    Apply the previous theorem to express in terms of new coordinates and that eliminate the cross term, and classify the level curves for different values of .   We first normalize the eigenvectors to get: The orthogonal matrix with these unit eigenvectors as columns diagonalizes . When we express a vector , the quadratic form becomes:    "
},
{
  "id": "sec-10-1-second-derivtive-test-21",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-10-1-second-derivtive-test-21",
  "type": "Definition",
  "number": "9.5.7",
  "title": "Positive Definite and Negative Definite Matrices.",
  "body": " Positive Definite and Negative Definite Matrices   A symmetric matrix is called positive definite if it all its eigenvalues are strictly positive. It is negative definite if all its eigenvalues are non-positive. It is indefinite if it has both strictly positive and strictly negative eigenvalues.   "
},
{
  "id": "thm-10-1-positive-negative-definite-inequlaily",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#thm-10-1-positive-negative-definite-inequlaily",
  "type": "Theorem",
  "number": "9.5.8",
  "title": "",
  "body": "  A symmetric matrix is positive definite if and only if for every vector in . It is negative definite if and only if for every vector .    This follows from .   "
},
{
  "id": "sec-general-second-derivative-test-4-2",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-general-second-derivative-test-4-2",
  "type": "Theorem",
  "number": "9.5.9",
  "title": "Second Derivative Test.",
  "body": " Second Derivative Test   Let be a function, and suppose is a critical point of .  If the Hessian is positive definite then is a local minimum of .  If the Hessian is negative definite then is a local maximum of .  If the Hessian is indefinite then is a saddle point of .  In any other cases, the test gives no information.    If is a critical point of then the quadratic approximation of at is given by , where . If is positive definite, then by ,, has a minimum at , so has a local minimum at this point. If is negative definite, then by ,, has a maximum at , so has a local maximum at this point. If is indefinite, then by the function has a saddle point at , so the same is true for .   "
},
{
  "id": "act-10-1-second-derivative-test-two-variables",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#act-10-1-second-derivative-test-two-variables",
  "type": "Activity",
  "number": "9.5.8",
  "title": "",
  "body": "  Show that a matrix is positive definite if and only if is positive and , negative definite if and only if is positive and , and indefinite if and only if is negative. It follows from this that the second derivative test in two variables is just a special case of the second derivative test above.    If has eigenvalues and , then (the determinant of two similiar matrices is the same). So if is positive, and are either both positive (and the matrix is positive definite) or both negative (and so the matrix is negative definite). Conversely, if is negative, and have opposite signs, so the matrix is indefinite.  If is positive, then is positive. If and are both positive, then the characteristic polynomial of this matrix is given by . This is a quadratic equation with vertex at , which is positive. There must exist a root of the equation to the right of the vertex, so the characteristic polynomial has a positive root (and thus both roots are positive). Conversely, if and are both negative, then the characteristic polynomial has a vertex to the left of the -axis, and so has a negative root (and thus both roots are negative).   "
},
{
  "id": "sec-general-second-derivative-test-4-4",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-general-second-derivative-test-4-4",
  "type": "Activity",
  "number": "9.5.9",
  "title": "",
  "body": "  Consider the function . Find all critical points of and determine the behavior of near each critical point.    First find the critical points.   We compute that , which vanishes only at , which is the only critical point.    Now classify each critical point.   The Hessian of is the constant matrix . The characteristic polynomial of is . So all roots of the characteristic polynomial are positive, so all eigenvalues of are positive, and so is positive definite. So we conclude that is a local minimum of .   "
},
{
  "id": "sec-general-second-derivative-test-4-5",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-general-second-derivative-test-4-5",
  "type": "Activity",
  "number": "9.5.10",
  "title": "",
  "body": "  Classify the critical points of the function using the second derivative test.    We compute that . Notice that is non-vanishing, so that there are no critical points on the plane . Now suppose that and . The third entry tells us that . Substituting this into the second equation gives that , i.e. that . Substituting this into the first equation gives that , i.e. that or . Back propogation then gives the two critical points of , namely and .  Next, we classify these critical points. We calculate that the Hessian of is . In particular, , which has characteristic polynomial . So has eigenvalues and , and so is indefinite, so that has a saddle point at . We have , which has characteristic polynomial , so has eigenvalues and , and is thus an indeterminate matrix. So is also a saddle point of .   "
},
{
  "id": "sec-general-second-derivative-test-5-4",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-general-second-derivative-test-5-4",
  "type": "Activity",
  "number": "9.5.11",
  "title": "",
  "body": " Compute the gradient and Jacobians of the following functions:   The gradient of , for a fixed vector .   Expanding in components, , and we see that , i.e. so that .    The gradient of , for an matrix .   We start by using the identity . So the derivative of this quantity in the variable is . So the gradient of is .    The Jacobian of the vector-valued function , where is a fixed matrix.   We write , so , and so .   "
},
{
  "id": "sec-general-second-derivative-test-5-5",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-general-second-derivative-test-5-5",
  "type": "Activity",
  "number": "9.5.12",
  "title": "",
  "body": "  Let be an matrix with linearly independent columns and suppose . Consider the least squares problem     Find the critical points of the function .   We epand . Taking gradients thus gives that . So the critical points of occur when . This vector-equation is called the normal equation for the least squares problem.   "
},
{
  "id": "sec-general-second-derivative-test-5-6",
  "level": "2",
  "url": "sec-general-second-derivative-test.html#sec-general-second-derivative-test-5-6",
  "type": "Activity",
  "number": "9.5.13",
  "title": "",
  "body": "  Determine whether any critical point is a local minimum, local maximum, or saddle point. Using this information, solve the least squares optimization problem.    Recall the Hessian is the Jacobian of the gradient, and hence . So we need to determine whether is positive definite, negative definite, or indefinite. Let's consider the quadratic form for any non-zero vector : Since for - to see why, has linearly independent columns and so has rank and thus by the rank nullity theorem must have nullity zero, and this means . So we conclude that is always positive when . But if is a unit eigenvector for with eigenvalue , then we also find that , which must be positive since is always positive. So only has positive eigenvalues. So is positive definite by , and so has a local minimum at any critical point.  Since only has positive eigenvalues, it also must be an invertible matrix. But this means that the least squares problem has a single global optimum, at the unique solution to the normal equation , i.e. for . So we have found a minimizer to the least squares problem.   "
},
{
  "id": "sec-lagrange-multipliers",
  "level": "1",
  "url": "sec-lagrange-multipliers.html",
  "type": "Section",
  "number": "9.6",
  "title": "Lagrange Multipliers",
  "body": " Lagrange Multipliers  We now discuss the method of Lagrangian multipliers, which is a method of finding potential local minima and local maxima of a function on a hypersurface  in given as the level set of a function, i.e. when , for some differentiable scalar-valued function and some .   Critical Points   Consider a surface of the form , where is a differentiable scalar-valued function with for all . If a point is in the interior of the domain of a differentiable function , then we say that is a constrained critical point of on if there exists such that . Equivalently, if we define the Lagrangian function  , then a point is a constrained critical point if there exists so that is a critical point of the function , i.e. .    The method of Lagrangian multipliers is a way of finding optima of a function along a hypersurface given as above. The method consists of finding all critical points of the function on (of which there are usually only finitely many). This consists of finding the solutions to the system of vector equations and . The next theorem shows that any local extremum of on must occur at a critical point, so that the method of Lagrangian multipliers will find these extrema.    Consider a surface , and is non-vanishing on . If a point is a local extremum of a differentiable function , and is an interior point of the domain of , then is a constrained critical point of on . Conversely, if is a closed and bounded subset of , the absolute maximum and minimum of occur at critical points of .    The idea is quite simple when sketched geometrically. In order for to be a local extremum for on , it must be true that for any unit vector in the tangent plane to at a point , the directional derivative must be equal to (or else travelling along in the direction of or will lead the function to increase or decrease, which contradicts the fact that is a local extrema). Recalling , it follows that for any vector in the tangent plane to at , which can only be true if is normal to the tangent plane to the surface at . When is equal to the level set of a function , a normal vector to the tangent plane at is given by . So if is a local extremum of on , then and must be multiples of one another, i.e. it must be true that for some , i.e. so that is a constrained critical point of on .     Suppose we are optimizing a function, whose contours are the red curves in this diagram, subject to a given constraint which restricts our values to lie on the blue curve in the diagram. Then the critical points along this curve occur when the normal vectors to the red curve and the blue curve agree. From: Stanford's MATH 51 textbook      Find the absolute extrema of subject to the constraint .    Write . Then we are finding extrema of on the surface . We calculate that . So the constrained critical points of on are the points for which there exists such that , i.e. the points that satisfy the three equations . If the second and third equation holds, then cannot be zero, and we can divide both sides of the equation by to obtain that and . Substituting this into the first equation, we find that , which simplifies to , so either or . If , then and , and if , then and . So the two points and are the two constrained critical points of on . Since is a sphere, and is thus closed and bounded, the absolute maximum and minima occur on these two points. We have , so is the absolute maximum of on , and is the absolute minimum of on .      Find the absolute extrema of the function , subject to the constraint .    Let . Then and . A point is a constrained critical point of on the sphere only when there exists so that the two equations both hold, which expands to the four equations . Since , either (and dividing the first equation by we obtain ), (and dividing the second equation we obtain ), or (and dividing the third equation by gives ). When , the first equation automtically holds, and the second and third equation can only hold when . Thus the fourth equation becomes , so . Similarily, when we have and , and when we have and . So the function has six constrained critical points on , at the points , , and . We have . So the absolute minima of occur at , and the absolute maxima of occur at .    "
},
{
  "id": "sec-lagrange-multipliers-3",
  "level": "2",
  "url": "sec-lagrange-multipliers.html#sec-lagrange-multipliers-3",
  "type": "Definition",
  "number": "9.6.1",
  "title": "Critical Points.",
  "body": " Critical Points   Consider a surface of the form , where is a differentiable scalar-valued function with for all . If a point is in the interior of the domain of a differentiable function , then we say that is a constrained critical point of on if there exists such that . Equivalently, if we define the Lagrangian function  , then a point is a constrained critical point if there exists so that is a critical point of the function , i.e. .   "
},
{
  "id": "sec-lagrange-multipliers-5",
  "level": "2",
  "url": "sec-lagrange-multipliers.html#sec-lagrange-multipliers-5",
  "type": "Theorem",
  "number": "9.6.2",
  "title": "",
  "body": "  Consider a surface , and is non-vanishing on . If a point is a local extremum of a differentiable function , and is an interior point of the domain of , then is a constrained critical point of on . Conversely, if is a closed and bounded subset of , the absolute maximum and minimum of occur at critical points of .    The idea is quite simple when sketched geometrically. In order for to be a local extremum for on , it must be true that for any unit vector in the tangent plane to at a point , the directional derivative must be equal to (or else travelling along in the direction of or will lead the function to increase or decrease, which contradicts the fact that is a local extrema). Recalling , it follows that for any vector in the tangent plane to at , which can only be true if is normal to the tangent plane to the surface at . When is equal to the level set of a function , a normal vector to the tangent plane at is given by . So if is a local extremum of on , then and must be multiples of one another, i.e. it must be true that for some , i.e. so that is a constrained critical point of on .   "
},
{
  "id": "sec-lagrange-multipliers-6",
  "level": "2",
  "url": "sec-lagrange-multipliers.html#sec-lagrange-multipliers-6",
  "type": "Figure",
  "number": "9.6.3",
  "title": "",
  "body": " Suppose we are optimizing a function, whose contours are the red curves in this diagram, subject to a given constraint which restricts our values to lie on the blue curve in the diagram. Then the critical points along this curve occur when the normal vectors to the red curve and the blue curve agree. From: Stanford's MATH 51 textbook   "
},
{
  "id": "sec-lagrange-multipliers-7",
  "level": "2",
  "url": "sec-lagrange-multipliers.html#sec-lagrange-multipliers-7",
  "type": "Activity",
  "number": "9.6.1",
  "title": "",
  "body": "  Find the absolute extrema of subject to the constraint .    Write . Then we are finding extrema of on the surface . We calculate that . So the constrained critical points of on are the points for which there exists such that , i.e. the points that satisfy the three equations . If the second and third equation holds, then cannot be zero, and we can divide both sides of the equation by to obtain that and . Substituting this into the first equation, we find that , which simplifies to , so either or . If , then and , and if , then and . So the two points and are the two constrained critical points of on . Since is a sphere, and is thus closed and bounded, the absolute maximum and minima occur on these two points. We have , so is the absolute maximum of on , and is the absolute minimum of on .   "
},
{
  "id": "sec-lagrange-multipliers-8",
  "level": "2",
  "url": "sec-lagrange-multipliers.html#sec-lagrange-multipliers-8",
  "type": "Activity",
  "number": "9.6.2",
  "title": "",
  "body": "  Find the absolute extrema of the function , subject to the constraint .    Let . Then and . A point is a constrained critical point of on the sphere only when there exists so that the two equations both hold, which expands to the four equations . Since , either (and dividing the first equation by we obtain ), (and dividing the second equation we obtain ), or (and dividing the third equation by gives ). When , the first equation automtically holds, and the second and third equation can only hold when . Thus the fourth equation becomes , so . Similarily, when we have and , and when we have and . So the function has six constrained critical points on , at the points , , and . We have . So the absolute minima of occur at , and the absolute maxima of occur at .   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
