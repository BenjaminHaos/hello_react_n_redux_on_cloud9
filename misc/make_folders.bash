 #!/bin/bash

function create_directories(){
    num_digits=2
    for i in {1..27}
    do
        local dir_name_prefix;
        local dir_name_suffix;
        local dir_name;
        dir_name_prefix="$1";
        dir_name_suffix=$(printf "%0*d\n" $num_digits $i);
        dir_name="$dir_name_prefix$dir_name_suffix"
        mkdir $dir_name;
        cd $dir_name;
        mkdir example_app;
        create_read_me_file "$i";
        cd ..;
    done
}

function create_read_me_file() {

    cat > README.md << EOF
[Video $1]()
EOF
}

create_directories "vid_";
